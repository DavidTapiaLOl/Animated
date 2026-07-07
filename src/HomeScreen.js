import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style = {styles.contenedor}>
      <Text style = {styles.titulo}>Bienvenido</Text>
      <Text style = {styles.subtitulo}>Te encuentras en la pantalla de inicio</Text>
      <Pressable style = {styles.boton} onPress={() => navigation.navigate('Perfil')}>
        <Text style = {styles.botonTexto}>Ver mi Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,                          
        justifyContent: 'center',         
        alignItems: 'center',            
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        color: '#64748B',
        marginBottom: 30,
        textAlign: 'center'
    },
    boton: {
        backgroundColor: '#3B82F6',
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
    },
    botonTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default HomeScreen;