import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const AnimacionImage = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png' }}
                style={[styles.image, {
                    opacity: animacion,
                    transform: [{ scale: animacion.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] }) }]
                }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a2e',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
    }
});

export default AnimacionImage;
