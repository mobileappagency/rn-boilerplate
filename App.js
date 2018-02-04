// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'

import HelloWorld from './components/HelloWorld'

type State = {
  text: string
}

type Props = {}

export default class App extends React.Component<Props, State> {
  constructor (props: Object) {
    super(props)
    this.state = {
      text: 'Hello World!'
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <HelloWorld text={this.state.text} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})
