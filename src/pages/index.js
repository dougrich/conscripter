import css from './index.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import Label from '../components/label'
import DropZone from '../components/dropzone'

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
          <ConnectedDropZone/>
          Welcome to Next.js!
          <ConnectedLabel />
          <FontStyle />
        </div>
      </Provider>
    )
  }
}