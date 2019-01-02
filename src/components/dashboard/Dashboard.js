import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      top20CoinData: [],
      symbol: [],
      price: [],
      url: [],
      coinheat: [],
      cap: [],
      image: [],
     }
  }

  componentDidMount() {
    let symbolData = []
    let priceData = []
    let urlData = []
    let coinheatData = []
    let capData = []
    let imageData = []

    fetch(`https://chasing-coins.com/api/v1/top-coins/20`)
    .then((response) => response.json())
    .then((response) => {
      // console.log('response:: ', response)

      for(let key in response) {
        symbolData.push(response[key].symbol)
        priceData.push(response[key].price)
        urlData.push(response[key].url)
        coinheatData.push(response[key].coinheat)
        capData.push(response[key].cap)
      }

      this.setState({ symbol: symbolData })
      this.setState({ price: priceData })
      this.setState({ url: urlData })
      this.setState({ coinheat: coinheatData })
      this.setState({ cap: capData })
    })
    .catch((error) => console.log('Danger FrontEnd', error));

    setTimeout(() => {
      // console.log('symbolData:', symbolData)
      for(let i = 0; i < symbolData.length; i++) {
        fetch(`https://chasing-coins.com/api/v1/std/logo/${ symbolData[i] }`)
        .then((response) => {
          // console.log(response.url)
          imageData.push(response.url)
        })
        .catch((error) => console.log('Danger FrontEnd', error));
      }

  
    }, 4000)
    this.setState({ image: imageData })

  }

  render() {

    let displaytop20CoinData = this.state.symbol.map((value, index) => {
      // console.log('Line 39', value);
      console.log(this.state.image);
  
      return(
        <View key={ value.symbol }>
          <Text>symbol: { value }</Text>
          <Text>image: { this.state.image }</Text>
          {/* <Image source={ { uri: this.state.image[index] } } style={ { width: 40, height: 40 } } />  */}
          <Text>price: { this.state.price[index] }</Text>
          {/* <Text>url: { this.state.url[index] }</Text> */}
          <Text>coinheat: { this.state.coinheat[index] }</Text>
          <Text>cap: { this.state.cap[index] }</Text>
        </View>
      )
    })
   
    return (
      <ScrollView>
        { displaytop20CoinData }
      </ScrollView>
    );
  }
}

export default Dashboard;

