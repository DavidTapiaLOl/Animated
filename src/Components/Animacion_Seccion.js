import React, { useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const MENU = [
  { title: 'Entradas', data: ['Nachos', 'Papas Fritas', 'Aros de Cebolla'] },
  { title: 'Platos Fuertes', data: ['Hamburguesa', 'Pizza', 'Pasta', 'Tacos'] },
  { title: 'Postres', data: ['Helado', 'Brownie', 'Cheesecake'] },
];

const Animacion_Seccion = () => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.6],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.95],
    extrapolate: 'clamp',
  });

  const itemOpacity = scrollY.interpolate({
    inputRange: [50, 200],
    outputRange: [0.3, 1],
    extrapolate: 'clamp',
  });

  const itemTranslateY = scrollY.interpolate({
    inputRange: [50, 200],
    outputRange: [30, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>

      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Menu del Dia</Text>
      </View>

      <Animated.SectionList
        sections={MENU}
        keyExtractor={(item, index) => item + index}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}

        renderSectionHeader={({ section: { title } }) => (
          <Animated.View
            style={[
              styles.cabeceraSeccion,
              {
                opacity: headerOpacity,
                transform: [{ scale: headerScale }],
              },
            ]}
          >
            <Text style={styles.textoCabeceraSeccion}>{title}</Text>
          </Animated.View>
        )}

        renderItem={({ item }) => (
          <Animated.View
            style={[
              styles.item,
              {
                opacity: itemOpacity,
                transform: [{ translateY: itemTranslateY }],
              },
            ]}
          >
            <Text style={styles.textoItem}>{item}</Text>
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  tituloContainer: {
    backgroundColor: '#10B981',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cabeceraSeccion: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  textoCabeceraSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  item: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  textoItem: {
    fontSize: 16,
    color: '#4B5563',
  },
});

export default Animacion_Seccion;
