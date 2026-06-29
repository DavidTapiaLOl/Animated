import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimacionImagen from './src/Components/AnimacionImagen';
import Animacion_Lista from './src/Components/Animacion_Lista';
import Animacion_Scroll from './src/Components/Animacion_Scroll';
import Animacion_Seccion from './src/Components/Animacion_Seccion';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AnimacionImagen></AnimacionImagen> */}
      {/* <Animacion_Scroll></Animacion_Scroll> */}
       {/* <Animacion_Seccion></Animacion_Seccion>  */}
      <Animacion_Lista></Animacion_Lista>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
