import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ProfileScreen extends Component
{
    render ()
    {
        return (
            <View>
                <Text style={ styles.profiletext }>ProfileScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    profiletext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
    }
} )
