import React from 'react';
import { Button } from 'react-native';

const fetchLocation = (props) => {
  console.log(props)
  return(
    <Button title='Get Location' onPress={ props.onGetLocation }></Button>
  )
}

export default fetchLocation;