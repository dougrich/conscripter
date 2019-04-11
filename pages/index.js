import css from './index.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import Label from '../components/label'
import SubstitutionEditor from '../components/substitution-editor'
import GlyphGrid from '../components/glyph-grid'
import Preview from '../components/preview';
import Button from '../components/button';
import Input from '../components/input';
import GithubCorner from '../components/github-corner'
import Description from '../components/description';
import Header from '../components/header';
import Head from '../components/head';
import Footer from '../components/footer';

const store = createStore()

const PreviewPlaceholder = `the quick brown fox jumps over the lazy red dog

123456789`

const FontStyle = connect(
  state => ({ data: state.fonts.datauri })
)(function ({ data }) {
  if (!data) return null
  return (
    <style id='test' dangerouslySetInnerHTML={{__html:'@font-face { font-family: demofont; src: url(\'' + data + '\')}'}}></style>
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
    onReplaceChange: ({ currentTarget: { value } }) => dispatch(actions.updateSubstitutionReplace(value)),
    onAdvanceWidthChange: ({ currentTarget: { value }}) => dispatch(actions.updateSubstitutionAdvanceWidth(value)),
    onRemove: () => dispatch(actions.removeSubstitution(store.getState().substitution)),
    onSubmit: () => dispatch(actions.submitSubstitution(store.getState().substitution)),
    onCancel: () => dispatch(actions.cancelSubstitution()),
    onSwap: (a, b) => dispatch(actions.swapSubstitution(a, b))
  })
)(SubstitutionEditor)


const ConnectedTopActionSet = connect(
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
    <div>
      <div className={css.actions}>
        <Button variant='success' onClick={onDownload}>Download</Button>
        <Button title='Save to File' variant='default' onClick={onSave}>Save</Button>
        <Button title='Load from File' variant='default' onClick={onLoad}>Load</Button>
      </div>
      {loadError && (
        <Description variant='danger'>{loadError.message}</Description>
      )}
    </div>
  )
})

const ConnectedFontName = connect(
  state => ({ value: state.fonts.fontname }),
  dispatch => ({
    onChange: ({ currentTarget: { value }}) => dispatch(actions.setFontName(value))
  })
)(Input)

const ConnectedHelmet = connect(
  state => ({
    title: state.fonts.fontname
  })
)(Head)

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
              <ConnectedTopActionSet/>
              <ConnectedFontName label='Font Name'/>
            </div>
            <div className={css.workspace}>
              <div className={css.panel}>
                <div className={css.internalpanel}>
                  <Label>Substitutions</Label>
                  <Description>
                    <p>The glyphs that you want to substitute for text. Add in the order of most specific to least specific, as the first eligible substitution is used.</p>
                    <p>i.e., if you add `x` and then `xx`, you will see two `x` glyphs. If you add `xx` and then `x`, you will see one `xx` glyph.</p>
                    <p>If something doesn't make sense, raise an issue on <a href="https://github.com/dougrich/conscripter/issues/new" target="_blank">Github</a> with your SVG to improve the app.</p>
                  </Description>
                  <ConnectedGlyphGrid>
                    <ConnectedSubstitutionEditor/>
                  </ConnectedGlyphGrid>
                </div>
              </div>
              <div className={css.panel}>
                <Label>Preview</Label>
                <Preview defaultValue={PreviewPlaceholder}/>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </Provider>
    )
  }
}