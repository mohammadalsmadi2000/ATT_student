import {StyleSheet, Text, View} from 'react-native';

import { CardViewWithImage } from 'react-native-simple-card-view'
import React from 'react';

const Card=(props)=>{
return(
  <CardViewWithImage
        width={ 200}
        source={ {uri: props.image} }
        content={ props.content}
        title={ props.name }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        roundedImage={ false }
    />
)
}
const styles=StyleSheet.create({

})
export default Card;