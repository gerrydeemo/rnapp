import { Animated, Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Easing } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import ORBIT from "../assets/orbit.gif"


export default function HomeScreen ()
{
    const [ spinValue ] = useState( new Animated.Value( 0 ) );
    const StyledAnimatedImage = Animated.createAnimatedComponent( ImageBackground );
    const StylesAnimatedText = Animated.createAnimatedComponent( Text );
    //loop an animation forever with value of spinvalue
    useEffect( () =>
    {
        Animated.loop( Animated.timing( spinValue, {
            toValue: 1,
            duration: 10050,
            easing: Easing.linear,
            useNativeDriver: true,
        } ) ).start();

    }, [] );
    const sizeUp = () =>
    {


    }

    return (
        <View style={ styles.container }>

            <ImageBackground source={ require( "../assets/stars.jpg" ) } resizeMode="cover" style={ styles.bgImage }>
                <View style={ styles.orbit }>

                    <StyledAnimatedImage
                        source={ require( "../assets/reactmoon.png" ) }
                        style={
                            [
                                styles.moon,
                                {

                                    transform: [ {
                                        rotate: spinValue.interpolate( {
                                            inputRange: [ 0, 1 ],
                                            outputRange: [ "0deg", "360deg" ]
                                        } )
                                    },
                                    { perspective: 1000 } ]

                                } ] } />

                    <StyledAnimatedImage
                        source={ require( "../assets/expressstar.png" ) }
                        style={
                            [
                                styles.moon,
                                {

                                    transform: [ {
                                        rotate: spinValue.interpolate( {
                                            inputRange: [ 0, 1 ],
                                            outputRange: [ "0deg", "-360deg" ]
                                        } )
                                    },
                                    { perspective: 1000 } ]

                                } ] } ><StylesAnimatedText style={
                                    [
                                        styles.expressText,
                                        {

                                            transform: [ {
                                                rotate: spinValue.interpolate( {
                                                    inputRange: [ 0, 1 ],
                                                    outputRange: [ "0deg", "360deg" ]
                                                } )
                                            },
                                            { perspective: 1000 } ]

                                        } ] }>EXPRESS</StylesAnimatedText></StyledAnimatedImage>
                    <TouchableOpacity onPress={ sizeUp }>
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

    moon: {
        width: "80%",
        height: "80%",
        position: 'absolute',

        zIndex: 1,
    },


    expressText: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
    },
    bgImage: {
        flex: 1,
        justifyContent: "center"
    },
    orbit: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    earthImage: {
        width: 120,
        height: 120,
    },
} )