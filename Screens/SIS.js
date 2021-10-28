import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { WebView } from 'react-native-webview';

export default class SIS extends Component {
    render() {
        return (
                <View>                <WebView source={{ uri: 'https://hijjawi.yu.edu.jo/index.php/ar/cpe/faculty-members' }} />
                </View>
          
        )
    }
}
