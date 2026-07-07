import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

const Animacion2 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 450,
            duration: 10000,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.caja, 
                { width: animacion, height: animacion }
            ]} />
    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: '#6c63ff',
        borderRadius: 12,
    }
});

export default Animacion2;