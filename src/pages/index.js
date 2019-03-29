import css from './index.scss'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import Input from '../components/input'

const store = createStore(function (state = { current: '' }, action) {
  if (action.type === 'SET') {
    return { ...state, current: action.value }
  } else {
    return state
  }
})

const ConnectedInput = connect(
  state => ({ value: state.current }),
  dispatch => ({ onChange: (e) => dispatch({ type: 'SET', value: e.currentTarget.value }) })
)(Input)

function Home() {
  return (
    <Provider store={store}>
      <div className={css.example}>
        Welcome to Next.js!
        <ConnectedInput className={css.text} label="Substitution" placeholder="Substitution"/>
      </div>
    </Provider>
  )
}

export default Home;