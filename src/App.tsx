import React, { Fragment, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { styles } from './styles'

export const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Header />
            <Counter />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}
