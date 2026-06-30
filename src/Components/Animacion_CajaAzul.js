import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions, Easing } from 'react-native';

const { height } = Dimensions.get('window');

const BOX_SIZE = 60;

const Animacion_CajaAzul = () => {
  const translateY = useRef(new Animated.Value(-BOX_SIZE)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: height * 0.35,
        duration: 1200,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.spring(scale, {
          toValue: 10,
          useNativeDriver: true,
          tension: 40,
          friction: 5,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
          tension: 60,
          friction: 7,
        }),
      ]),
      Animated.timing(translateY, {
        toValue: height + BOX_SIZE * 2,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.caja,
          {
            transform: [
              { translateY },
              { scale },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  caja: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
});

export default Animacion_CajaAzul;
