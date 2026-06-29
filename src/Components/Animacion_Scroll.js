import React, { useRef } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';

const Animacion_Scroll = () => {
const scrollY = useRef(new Animated.Value(0)).current;
const MaximoAlto = 200;
const MinimoAlto = 80;
const scroll = MaximoAlto - MinimoAlto;
  // 2. INTERPOLACIÓN: Mapeamos la posición del scroll a la altura del header
  const headerHeight = scrollY.interpolate({
    inputRange: [0, scroll], // Cuando el scroll va de 0 a 120...
    outputRange: [MaximoAlto, MinimoAlto], // ...la altura va de 200 a 80
    extrapolate: 'clamp', // Evita que la altura sea menor a 80 si el usuario sigue haciendo scroll
  });

  // Interpolación extra: Hacemos que un texto se desvanezca al subir
  const titleOpacity = scrollY.interpolate({
    inputRange: [0, scroll / 2, scroll],
    outputRange: [1, 0.5, 0], // El texto desaparece gradualmente
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* 3. La Cabecera Animada (fuera del ScrollView para que se quede fija arriba) */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
          Mi Perfil
        </Animated.Text>
      </Animated.View>

      {/* 4. El Animated.ScrollView */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: MaximoAlto }}
        // scrollEventThrottle={16} asegura que el evento se dispare a 60fps
        scrollEventThrottle={16}
        // Animated.event conecta el gesto del usuario directamente con nuestro scrollY
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // 'height' no soporta native driver, por eso es false aquí
        )}
      >
        {/* Contenido de relleno para poder hacer scroll */}
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.itemText}>Elemento de la lista {i + 1}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Asegura que el header esté por encima de la lista
    elevation: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20, // Espacio para la barra de estado del teléfono
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Animacion_Scroll