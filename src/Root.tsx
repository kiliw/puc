import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from './components/Loading'
import configureStore from './configureStore'
import AppNavigator from './navigation/AppNavigator'

export const Root = () => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </PersistGate>
    </Provider>
  )
}
