import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const AnimacionScrollView = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                style={[styles.scrollView, {
                    transform: [{ scale: animacion.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }]
                }]}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
            >
                {[1, 2, 3, 4, 5].map((item) => (
                    <View key={item} style={styles.box}>
                        <Text style={styles.text}>Item {item}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
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
    scrollView: {
        flexDirection: 'row',
        height: 120,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#6c63ff',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    }
});

export default AnimacionScrollView;
