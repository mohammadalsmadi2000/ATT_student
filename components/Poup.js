import { Popup, Root } from 'popup-ui'
import  React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export class Poup extends Component {
    render() {
        return (
            <Root>
            <View>
                <TouchableOpacity
                    onPress={() =>
                      Popup.show({
                        type: 'success',
                        title: 'Dikkat!',
                        textBody: 'Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez. ',
                        buttonText: 'Tamam',
                        callback: () => Popup.hide()
                      })
                    }
                >
                    <Text>Open Popup Message</Text>
                </TouchableOpacity>
            </View>
        </Root>
        )
    }
}

export default Poup
