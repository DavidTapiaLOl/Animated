import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexComponent() {
    return (
        <View style={styles.container}>
            <Text>Este es mi componente Flex</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
});
