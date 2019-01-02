import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/components/dashboard/Dashboard'

class App extends Component{
  constructor(props) {
    super(props) 

    this.state = {

    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Dashboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App