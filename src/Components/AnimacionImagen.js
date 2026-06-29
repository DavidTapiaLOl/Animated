import { View, Text, Animated, StyleSheet, Pressable } from 'react-native';
import React, { useRef } from 'react';

const AnimacionImagen = () => {
  const animacion = useRef(new Animated.Value(1)).current;

  const PresionarBtn = () => {
    Animated.timing(animacion, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const SoltarBtn = () => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Animated.Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={[
            styles.logo,
            { transform: [{ scale: animacion }] }
          ]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.Btn,
            pressed && styles.BtnPressed
          ]}
          onPress={PresionarBtn}
        >
          <Text style={styles.BtnText}>+</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.Btn,
            pressed && styles.BtnPressed
          ]}
          onPress={SoltarBtn}
        >
          <Text style={styles.BtnText}>-</Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  imageWrapper: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 30,
  },
  Btn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  BtnPressed: {
    backgroundColor: '#2563EB',
    transform: [{ scale: 0.95 }],
  },
  BtnText: {
    fontSize: 36,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: -4,
  },
});

export default AnimacionImagen;