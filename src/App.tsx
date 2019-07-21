import React, { Fragment, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { Counter } from './components/Counter'
import { styles } from './styles'

const App = () => {
  const [amountOfPullUps, setState] = useState(0)
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
            <View style={styles.sectionMainTitle}>
              <Text style={styles.mainTitle}>
                Welcome to PUC the Pull-Up-Counter
              </Text>
            </View>
            <Counter />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default App
