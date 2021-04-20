import css from './index.module.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import SubstitutionEditor from '../components/substitution-editor'
import GlyphGrid from '../components/glyph-grid'
import Preview from '../components/preview';
import Button, { ButtonBar } from '../components/button';
import GithubCorner from '../components/github-corner'
import Description from '../components/description';
import Header from '../components/header';
import Head from '../components/head';
import Footer from '../components/footer';
import Typography from '../components/typography';
import Text from '../components/text';
import Links from '../components/links';
import Print from '../components/print.module.scss'

const store = createStore({})

const PreviewPlaceholder = `the quick brown fox jumps over the lazy red dog

123456789`

const FontStyle = connect(
  state => ({ data: state.fonts.datauri })
)(function ({ data }) {
  if (!data) return null
  return (
    <style id='test' dangerouslySetInnerHTML={{__html:'@font-face { font-family: demofont; src: url(\'' + data + '\');} @font-face { font-family: base-demofont; src: url(' + BASE_LINK + '/static/AVHersheySimplexMedium.otf' + ');}'}}></style>
  )
})

const ConnectedGlyphGrid = connect(
  state => ({ ...state.fonts, ...state.substitution }),
  dispatch => ({
    onSubstitutionSelect: (substitution) => dispatch(actions.selectSubstitution(substitution)),
    onSubstitutionSwap: (a, b) => dispatch(actions.swapSubstitution(a, b))
  })
)(GlyphGrid)

const ConnectedSubstitutionEditor = connect(
  state => {
    const {
      fonts,
      substitution
    } = state

    const idx = fonts.substitutions.indexOf(substitution.active)
    const canRemove = idx >= 0
    const canMoveLeft = idx > 0
    const canMoveRight = idx < fonts.substitutions.length - 1 && idx >= 0
    
    return ({
      ...fonts,
      ...substitution,
      idx,
      canRemove,
      canMoveLeft,
      canMoveRight
    })
  },
  (dispatch) => ({
    onUpload: ({ contents }) => dispatch(actions.updateSubstitutionGlyph(store.getState().fonts.meta, contents)),
    onReplaceChange: (value) => dispatch(actions.updateSubstitutionReplace(value)),
    onAdvanceWidthChange: (value) => dispatch(actions.updateSubstitutionAdvanceWidth(value)),
    onRemove: () => dispatch(actions.removeSubstitution(store.getState().substitution)),
    onSubmit: () => dispatch(actions.submitSubstitution(store.getState().substitution)),
    onCancel: () => dispatch(actions.cancelSubstitution()),
    onSwap: (a, b) => dispatch(actions.swapSubstitution(a, b)),
    onToggleDiacritic: v => dispatch(actions.updateSubstitutionDiacritic(v))
  })
)(SubstitutionEditor)


const ConnectedFontActions = connect(
  state => ({ loadError: state.fonts.error }),
  dispatch => ({
    onDownload: () => dispatch(actions.download()),
    onSave: () => dispatch(actions.save(store.getState())),
    onLoad: () => dispatch(actions.load())
  })
)(function ({
  loadError,
  onDownload,
  onSave,
  onLoad
}) {
  return (
    <div className={Print.none}>
      <Description>
        Make sure to read the <Links.Usage/> to figure out how to use your downloaded font!
      </Description>
      <ButtonBar>
        <Button title='Export OTF for use as font' variant='success' onClick={onDownload}>Export<br/><Typography.Small>(.otf)</Typography.Small></Button>
        <Button title='Save workspace to use later' variant='default' onClick={onSave}>Save<br/><Typography.Small>(.cwk)</Typography.Small></Button>
        <Button title='Load workspace from a save file' variant='default' onClick={onLoad}>Load<br/><Typography.Small>(.cwk/.json)</Typography.Small></Button>
      </ButtonBar>
      {loadError && (
        <Description variant='danger'>{loadError.message}</Description>
      )}
    </div>
  )
})

const ConnectedSubstitutionActions = connect(
  () => ({}),
  dispatch => ({
    onClearWorkspace: () => dispatch(actions.clear()),
  })
)(function ({
  onClearWorkspace
}) {
  return (
    <ButtonBar>
      <Button title='Clear workspace' variant='danger' onClick={onClearWorkspace}>Clear All</Button>
    </ButtonBar>
  )
})

const ConnectedFontName = connect(
  state => ({ value: state.fonts.fontname }),
  dispatch => ({
    onChange: (value) => dispatch(actions.setFontName(value))
  })
)(Text.Field)

const ConnectedHelmet = connect(
  state => ({
    title: state.fonts.fontname
  })
)(Head)

const ConnectedPreview = connect(
  state => ({
    keep: state.fonts.substitutions.map(s => ({ value: s.replace[0], fix: s.glyph.isDiacritic ? 'post' : 'in' }))
  })
)(Preview)

export default class Index extends React.Component {
  componentDidMount() {
    store.dispatch(actions.fetchFonts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css.root}>
          <ConnectedHelmet/>
          <GithubCorner url='https://github.com/dougrich/conscripter'/>
          <FontStyle />
          <Header/>
          <div className={css.container} role="main">
            <div className={css.topaction}>
              <ConnectedFontActions/>
              <ConnectedFontName label='Font Name' placeholder='Display name for your font'/>
            </div>
            <div className={css.workspace}>
              <div className={css.panel}>
                <div className={css.internalpanel}>
                  <Typography.Header.Section>Substitutions</Typography.Header.Section>
                  <ConnectedSubstitutionActions/>
                  <ConnectedGlyphGrid>
                    <ConnectedSubstitutionEditor/>
                  </ConnectedGlyphGrid>
                </div>
              </div>
              <div className={css.panel}>
              <Typography.Header.Section>Preview</Typography.Header.Section>
                <ConnectedPreview defaultValue={PreviewPlaceholder}/>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </Provider>
    )
  }
}