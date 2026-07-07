import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// Se importa el hook useNavigation para navegar entre pantallas
import { useNavigation } from '@react-navigation/native';

// Se obtiene el objeto de navegación desde el hook
const ConfigScreen = () => {
  const navigation = useNavigation(); // ← Hook de navegación

  return (
    <View style = {styles.contenedor}>
            <Text style = {styles.titulo}>Configuracion General</Text>
            <Text style = {styles.subtitulo}>Modificaciones internas del sistema</Text>
    
            {/* Al presionar el botón, se navega a la pantalla "Inicio" usando navigate() */}
            <Pressable style = {[styles.boton]} onPress={() => navigation.navigate('Inicio')}>
                <Text style = {[styles.botonTexto, styles.botonGris] }>Salir y volver al inicio</Text>
            </Pressable>
        </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        color: '#475569',
        marginBottom: 30,
        textAlign: 'center'
    },
    boton: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
    },
    botonGris: {
      paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
        backgroundColor: '#64748B', // Gris para el botón de salida / cierre
    },
    botonTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default ConfigScreen;
