import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F0B27A', '#82E0AA', '#F1948A', '#85929E', '#73C6B6',
  '#E59866', '#AEB6BF', '#D7BDE2', '#A3E4D7', '#FADBD8',
];

const DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
  subtitle: `Descripción del elemento ${i + 1}`,
  color: COLORS[i % COLORS.length],
}));

const ITEM_HEIGHT = 100;
const SPACING = 12;

const Animacion_Lista = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const entryAnimations = useRef(
    DATA.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    Animated.stagger(
      100,
      entryAnimations.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        })
      )
    ).start();
  }, []);

  const renderItem = ({ item, index }) => {
    const entryAnim = entryAnimations[index];

    const entryStyle = {
      opacity: entryAnim,
      transform: [
        {
          translateX: entryAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-width * 0.3, 0],
          }),
        },
        {
          scale: entryAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.85, 1],
          }),
        },
      ],
    };

    const inputRange = [
      (index - 1) * (ITEM_HEIGHT + SPACING),
      index * (ITEM_HEIGHT + SPACING),
      (index + 1) * (ITEM_HEIGHT + SPACING),
    ];

    const scrollScale = scrollY.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const scrollOpacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    const scrollStyle = {
      opacity: scrollOpacity,
      transform: [{ scale: scrollScale }],
    };

    return (
      <Animated.View style={[styles.itemContainer, entryStyle, scrollStyle]}>
        <View style={[styles.colorBar, { backgroundColor: item.color }]} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Animada</Text>
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    paddingVertical: 20,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: SPACING,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  colorBar: {
    width: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Animacion_Lista;
