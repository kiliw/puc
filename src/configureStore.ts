import { createStore } from 'redux'
import { createRootReducer } from './reducers'

export default () => {
  const store = createStore(createRootReducer())
  return {
    store,
  }
}
