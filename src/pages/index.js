import css from './index.scss'
import { createStore, actions } from '../state'
import { connect, Provider } from 'react-redux'
import Label from '../components/label'

const store = createStore()

const ConnectedLabel = connect(
  state => ({ label: state.fonts.status }),
)(Label)

export default class Index extends React.Component {
  componentDidMount() {
    store.dispatch(actions.fetchFonts())
  }

  render() {
    return (
      <Provider store={store}>
        <div className={css.example}>
          Welcome to Next.js!
          <ConnectedLabel />
        </div>
      </Provider>
    )
  }
}