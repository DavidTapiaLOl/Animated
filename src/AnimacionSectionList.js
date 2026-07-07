import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const DATA = [
    {
        title: "Platos principales",
        data: ["Pizza", "Milanesa", "Hamburguesa"]
    },
    {
        title: "Otros",
        data: ["Papitas", "Alitas", "Cebolla"]
    }
];

const AnimacionSectionList = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 4,
            tension: 30,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                scrollEnabled={false}
                style={[styles.sectionList, {
                    opacity: animacion,
                    transform: [{ translateX: animacion.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }) }]
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
    sectionList: {
        width: '100%',
    },
    item: {
        backgroundColor: '#2d2d50',
        padding: 10,
        marginVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3d3d60',
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#b0b0d0',
        paddingTop: 10,
        paddingBottom: 4,
    },
    title: {
        fontSize: 16,
        color: '#d0d0ff',
    }
});

export default AnimacionSectionList;
