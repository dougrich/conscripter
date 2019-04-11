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

const store = createStore()

const PreviewPlaceholder = `han.gul`

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
    onSubstitutionSelect: (substitution) => dispatch(actions.selectSubstitution(substitution))
  })
)(GlyphGrid)

const ConnectedSubstitutionEditor = connect(
  state => {
    const {
      fonts,
      substitution
    } = state

    const canRemove = fonts.substitutions.indexOf(substitution.active) >= 0
    
    return ({
      ...fonts,
      ...substitution,
      canRemove
    })
  },
  (dispatch) => ({
    onUpload: ({ contents }) => dispatch(actions.updateSubstitutionGlyph(store.getState().fonts.meta, contents)),
    onReplaceChange: ({ currentTarget: { value } }) => dispatch(actions.updateSubstitutionReplace(value)),
    onAdvanceWidthChange: ({ currentTarget: { value }}) => dispatch(actions.updateSubstitutionAdvanceWidth(value)),
    onRemove: () => dispatch(actions.removeSubstitution(store.getState().substitution)),
    onSubmit: () => dispatch(actions.submitSubstitution(store.getState().substitution)),
    onCancel: () => dispatch(actions.cancelSubstitution())
  })
)(SubstitutionEditor)

const ConnectedActionSet = connect(
  () => ({}),
  dispatch => ({
    onDownload: () => dispatch(actions.download())
  })
)(function ({
  onDownload
}) {
  return (
    <div>
      <Button variant='success' onClick={onDownload}>Download</Button>
    </div>
  )
})

const ConnectedFontName = connect(
  state => ({ value: state.fonts.fontname }),
  dispatch => ({
    onChange: ({ currentTarget: { value }}) => dispatch(actions.setFontName(value))
  })
)(Input)

export default class Index extends React.Component {
  componentDidMount() {
    store.dispatch(actions.fetchFonts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css.root}>
          <GithubCorner url='https://github.com/dougrich/conscripter'/>
          <FontStyle />
          <div>
            <ConnectedFontName label='Font Name'/>
          </div>
          <div>
            <Label>Substitutions</Label>
            <ConnectedGlyphGrid>
              <ConnectedSubstitutionEditor/>
            </ConnectedGlyphGrid>
          </div>
          <div>
            <Label>Preview</Label>
            <Preview defaultValue={PreviewPlaceholder}/>
          </div>
          <ConnectedActionSet/>
        </div>
      </Provider>
    )
  }
}