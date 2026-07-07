import React, { useEffect, useState } from 'react'
import { Text, Animated, StyleSheet } from 'react-native';

const Animacion1 = () => {
    const [animacion] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={{ opacity: animacion }}>
            <Text style={styles.texto}>Fade In</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#d0d0ff',
    },
});

export default Animacion1;