import './index.scss'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import Counter from '../components/simple'

const store = createStore(function (state = { current: 0 }, action) {
  console.log('REDUCER')
  if (action.type === 'INCREMENT') {
    return { ...state, current: state.current + 1 }
  } else {
    return state
  }
})

const ConnectedCounter = connect(
  state => ({ counter: state.current }),
  dispatch => ({ onClick: () => dispatch({ type: 'INCREMENT' }) })
)(Counter)

function Home() {
  return (
    <Provider store={store}>
      <div className="example">
        Welcome to Next.js!
        <ConnectedCounter/>
      </div>
    </Provider>
  )
}

export default Home;