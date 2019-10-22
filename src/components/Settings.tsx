import { Button, Container, Icon, View } from 'native-base'
import React from 'react'
import { ActionSheetIOS, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import * as actions from './Counter/actions'

const BUTTONS = ['Delete', 'Cancel']
const DESTRUCTIVE_INDEX = 0
const CANCEL_INDEX = 1

export const Settings = () => {
  const dispatch = useDispatch()
  return (
    <View style={{ padding: 10 }}>
      <Button
        iconLeft
        danger
        large
        style={styles.button}
        onPress={() =>
          ActionSheetIOS.showActionSheetWithOptions(
            {
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              options: BUTTONS,
              title: 'Clear your history',
            },
            (buttonIndex) => {
              if (buttonIndex === DESTRUCTIVE_INDEX) {
                dispatch(actions.clearSessions())
              }
            },
          )
        }
      >
        <Icon name="trash" />
        <Text>Delete History</Text>
      </Button>
    </View>
  )
}

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
})
