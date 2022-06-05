import { Animated, Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect } from 'react'
import ORBIT from "../assets/orbit.gif"


export default function HomeScreen ()
{
    const fadeAnim = useRef( new Animated.Value( 0 ) ).current;
    const fadeIn = () =>
    {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing( fadeAnim, {
            toValue: 1,
            duration: 5000
        } ).start();
    };
    const fadeOut = () =>
    {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing( fadeAnim, {
            toValue: 0,
            duration: 5000
        } ).start();
    };
    return (
        <View style={ styles.container }>

            <ImageBackground source={ require( "../assets/stars.jpg" ) } resizeMode="cover" style={ styles.bgImage }>
                <View style={ styles.orbit }>

                    <Animated.Text style={ [ styles.text, { translationX: fadeAnim } ] }>Fading View!</Animated.Text>

                    <TouchableOpacity onPress={ fadeIn }>
                        <Image
                            source={ ORBIT }
                            style={ styles.earthImage }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ fadeOut }>
                        <Image
                            source={ ORBIT }
                            style={ styles.earthImage }
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    bgImage: {
        flex: 1,
        justifyContent: "center"
    },
    orbit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    earthImage: {
        width: 200,
        height: 200,
    },
} )