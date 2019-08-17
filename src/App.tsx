import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { Root } from './Root'

export const App = () => {
  const { store } = configureStore()
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}
