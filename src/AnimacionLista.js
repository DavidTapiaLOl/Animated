import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimacionLista = () => {

    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(-50));

    useEffect(() => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: -30,
                    duration: 0,
                }),
                Animated.timing(animacion1, {
                    toValue: 60,
                    duration: 500,
                }),
                Animated.timing(animacion2, {
                    toValue: 30,
                    duration: 500,
                }),
                Animated.timing(animacion1, {
                    toValue: 0,
                    duration: 500,
                }),
                Animated.timing(animacion2, {
                    toValue: 0,
                    duration: 500,
                }),
            ])
        ).start();

    }, []);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 },
        ],
    };

    return (
        <View>
            <Animated.View style={[styles.contenedor, estiloAnimacion]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
   
    contenedor: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue',
    },
});

export default AnimacionLista;