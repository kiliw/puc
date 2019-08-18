import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Loading } from './components/Loading'
import configureStore from './configureStore'
import { Root } from './Root'

export const App = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  )
}
