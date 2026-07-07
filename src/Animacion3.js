import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

const Animacion3 = () => {
    const [animacion] = useState(new Animated.Value(14));
    
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity: 1 }}>
            <Animated.Text style={[styles.texto, { fontSize: animacion }]}>
                Animacion3
            </Animated.Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: '#d0d0ff',
    },
});

export default Animacion3;