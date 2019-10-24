import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import * as selectors from '../selectors'
import { styles } from '../styles'
import { HomeHeadline } from './Header'

const screenWidth = Dimensions.get('window').width

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  barPercentage: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
}

const data = {
  datasets: [
    {
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2, // optional
    },
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
}

export const Home: FunctionComponent = (
  props, // TODO Add typings for the navigation
) => {
  const overAllPullUps = useSelector(selectors.getOverAllPullUps)
  return (
    <View>
      <HomeHeadline />
      <View>
        <View style={{ marginBottom: 64 }}>
          <Text style={{ textAlign: 'center' }}>
            Go and count your pull ups!{' '}
          </Text>
          <Text style={{ textAlign: 'center' }}>
            This is a simple counter to keep track of your pull ups.
          </Text>
        </View>
      </View>
      <View>
        <View style={{ marginBottom: 64 }}>
          <Text style={{ textAlign: 'center' }}>
            Checkout your overall amount of pull ups
          </Text>
          <Text style={{ fontSize: 60, paddingTop: 30, textAlign: 'center' }}>
            {overAllPullUps}
          </Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />
        </View>
      </View>
    </View>
  )
}

export const TouchButton: FunctionComponent<{
  style?: any
  text: string
  onPress: () => void
}> = ({ text, style, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="white">
    <View style={style}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableHighlight>
)
