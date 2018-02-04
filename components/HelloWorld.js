// @flow
import React from 'react'
import { View, Text } from 'react-native'

type Props = {
  text: string
}

export default function HelloWorld (props: Props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  text: {
    textAlign: 'left',
    width: '70%',
    paddingHorizontal: 10
  }
}
