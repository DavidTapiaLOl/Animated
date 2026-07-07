import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';

const Animacion6 = () => {
    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(1));

    const reiniciar = () => {
        animacion1.setValue(0);
        animacion2.setValue(1);
        Animated.sequence([
            Animated.timing(animacion1, {
                toValue: 150,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.spring(animacion2, {
                toValue: 10,
                friction: 3,
                tension: 40,
                useNativeDriver: false,
            }),
            Animated.spring(animacion2, {
                toValue: 1,
                friction: 4,
                tension: 10,
                useNativeDriver: false,
            }),
            Animated.timing(animacion1, {
                toValue: 500,
                duration: 1500,
                useNativeDriver: false,
            }),
        ]).start();
    };

    useEffect(() => {
        reiniciar();
    }, []);

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 },
        ],
    };

    return (
        <View style={styles.contenedor}>
            <Animated.View style={[styles.caja, estiloAnimacion]} />
            <TouchableWithoutFeedback onPress={() => reiniciar()}>
                <View style={styles.btn}>
                    <Text style={styles.texto}>Reiniciar</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
    },
    caja: {
        width: 30,
        height: 30,
        backgroundColor: 'cornflowerblue',
    },
    btn: {
        alignSelf: 'flex-start',
        cursor: 'pointer',
        backgroundColor: '#6c63ff',
        width: 200,
        height: 60,
        margin:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 40,
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    },
});

export default Animacion6;
