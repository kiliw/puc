import React, { Fragment, FunctionComponent } from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import { styles } from '../styles'

export const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.body}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  </Fragment>
)
