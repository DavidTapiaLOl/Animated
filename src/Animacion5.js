import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';

const Animacion5 = () => {
    const [animacion] = useState(new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring(animacion, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };
    const soltarBtn = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 4,
            tension: 10,
            useNativeDriver: true,
        }).start();
    };


    const estiloAnimacion = {
        transform: [
            { scale: animacion }
        ],
    }

    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={() => presionarBtn()}
                onPressOut={() => soltarBtn()}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.texto}>Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#6c63ff',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})

export default Animacion5;