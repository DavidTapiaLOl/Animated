import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Animacion4 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 360,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, []);
    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    })
    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>
            <Animated.View style={[styles.caja, estiloAnimacion]} />
        </View>
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: '#6c63ff',
        borderRadius: 12,
    },
});

export default Animacion4;