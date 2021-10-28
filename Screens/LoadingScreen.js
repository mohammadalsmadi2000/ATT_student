import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { WebView } from 'react-native-webview';

export default class LoadingScreen extends Component {
    render() {
        return (
            
                <WebView source={{ uri: 'https://9afi.com' }} />
          
        )
    }
}
