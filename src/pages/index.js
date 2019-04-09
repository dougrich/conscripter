import css from './index.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import Label from '../components/label'
import DropZone from '../components/dropzone'
import SubstitutionEditor from '../components/substitution-editor'
import GlyphGrid from '../components/glyph-grid'
import GlyphPreview from '../components/glyph-preview';

const store = createStore()

const PreviewPlaceholder = `up <-
update <-
updated <-`

const ConnectedLabel = connect(
  state => ({ label: state.fonts.status }),
)(Label)

const ConnectedDropZone = connect(
  state => ({}),
  (dispatch) => ({
    onUpload: ({ contents }) => {
      dispatch(actions.addSubstitution(store.getState().fonts.meta, { replace: ['m'], advanceWidth: 1000 }, contents))
    }
  })
)(DropZone)

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
  state => ({ ...state.fonts, ...state.substitution }),
  (dispatch) => ({
    onUpload: ({ contents }) => dispatch(actions.updateSubstitutionGlyph(store.getState().fonts.meta, contents)),
    onReplaceChange: ({ currentTarget: { value } }) => dispatch(actions.updateSubstitutionReplace(value)),
    onAdvanceWidthChange: ({ currentTarget: { value }}) => dispatch(actions.updateSubstitutionAdvanceWidth(value)),
    onSubmit: () => dispatch(actions.submitSubstitution(store.getState().substitution)),
    onCancel: () => dispatch(actions.cancelSubstitution())
  })
)(SubstitutionEditor)

export default class Index extends React.Component {
  componentDidMount() {
    store.dispatch(actions.fetchFonts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css.root}>
          <FontStyle />
          <div>
            <Label>Substitutions</Label>
            <ConnectedGlyphGrid>
              <ConnectedSubstitutionEditor/>
            </ConnectedGlyphGrid>
          </div>
          <div>
            <Label>Preview</Label>
            <textarea className={css.example} defaultValue={PreviewPlaceholder}/>
          </div>
        </div>
      </Provider>
    )
  }
}