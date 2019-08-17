import React, { Fragment } from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { Counter } from './components/Counter/index'
import { Header } from './components/Header'
import { styles } from './styles'

export const Root = () => (
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
)
