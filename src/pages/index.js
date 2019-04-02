import css from './index.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import Label from '../components/label'
import DropZone from '../components/dropzone'
import GlyphPreview from '../components/glyph-preview'

const store = createStore()

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
    <style dangerouslySetInnerHTML={{__html:'@font-face { font-family: demofont; src: url(\'' + data + '\')}'}}></style>
  )
})

export default class Index extends React.Component {
  componentDidMount() {
    store.dispatch(actions.fetchFonts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css.example}>
          <GlyphPreview commands={[
    { type: 'M', x: 500, y: 300 },
    { type: 'L', x: 900, y: 300 },
    { type: 'L', x: 900, y: -100 },
    { type: 'L', x: 500, y: -100 },
    { type: 'Z' },
    { type: 'M', x: 500, y: 300 },
    { type: 'L', x: 100, y: 300 },
    { type: 'L', x: 100, y: 700 },
    { type: 'L', x: 500, y: 700 },
    { type: 'Z' }]} unitsPerEm={1000} advanceWidth={0} descender={-181}/>
          <div style={{marginBottom:'2m', textAlign: 'center'}}>
          abcdef<span>m</span>ghijk</div>
          <ConnectedDropZone/>
          <ConnectedLabel />
          <FontStyle />
        </div>
      </Provider>
    )
  }
}