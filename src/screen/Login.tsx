import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Animated } from 'react-native'
import myStyle from "../style/Style"


export default class Login extends Component {
    render() {
        return (
            <View style={[myStyle.container, { justifyContent: "center" }]}>
                <Animated.Value>
                    <TouchableOpacity
                        style={[myStyle.btnMedium]}
                    >
                        <Text style={[myStyle.textBtn]}>Login with google</Text>
                    </TouchableOpacity>
                </Animated.Value>
            </View>
        )
    }
}
