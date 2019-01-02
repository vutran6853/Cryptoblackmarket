import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/fetchLocation';
class App extends Component{
  constructor(props) {
    super(props) 

    this.state = {

    }
    this.handleGetUserLocation = this.handleGetUserLocation.bind(this);
  }

  handleGetUserLocation() {
    console.log('hit')
    navigator.geolocation.getCurrentPosition(postition => {
      console.log('Line 17', postition)
    }, error => {
      console.log('Line 19', error)
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Hello World!</Text>
        <FetchLocation onGetLocation={ this.handleGetUserLocation } />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App