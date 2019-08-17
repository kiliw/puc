import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { createRootReducer } from './reducers'

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  storage,
}

export default () => {
  const store = createStore(persistReducer(persistConfig, createRootReducer()))
  const persistor = persistStore(store)
  return {
    persistor,
    store,
  }
}
