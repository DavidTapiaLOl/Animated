import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const DATA = [
    { id: '1', title: 'FlatList Item 1' },
    { id: '2', title: 'FlatList Item 2' },
    { id: '3', title: 'FlatList Item 3' },
];

const AnimacionFlatList = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                style={[styles.flatList, {
                    opacity: animacion,
                    transform: [{ translateX: animacion.interpolate({ inputRange: [0, 1], outputRange: [-200, 0] }) }]
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
        width: '100%',
        paddingHorizontal: 20,
    },
    flatList: {
        width: '100%',
    },
    item: {
        backgroundColor: '#2d2d50',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3d3d60',
    },
    title: {
        fontSize: 16,
        color: '#d0d0ff',
    }
});

export default AnimacionFlatList;
