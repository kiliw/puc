import React, { Fragment } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Counter } from './components/Counter/index'
import { Header } from './components/Header'
import configureStore from './configureStore'
import { styles } from './styles'

export const App = () => {
  const { store } = configureStore()
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <Header />
              <Counter />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    </Provider>
  )
}
