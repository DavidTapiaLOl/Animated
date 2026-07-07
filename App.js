import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/HomeScreen';
import ConfigScreen from './src/ConfigScreen';
import PerfilScreen from './src/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerTitleAlign: 'right',
          headerStyle: {backgroundColor: '#F4511E',},
          headerTintColor: '#fff',
        }}
        >
          <Stack.Screen 
          name="Inicio" 
          component={HomeScreen} 
          screenOptions={{
            title: 'Menu principal'
          }} />
          <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} screenOptions={{
            title: 'Mi Perfil',
            headerStyle: {backgroundColor: '#3B92F6',},
            headerTintColor: '#fff',
          }} />
          <Stack.Screen name="Config" component={ConfigScreen} screenOptions={{
            title: 'Configuración',
            headerStyle: {backgroundColor: '#3B92F6',},
            headerTintColor: '#fff',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    paddingBottom: 100,
  },
  spacer: {
    marginBottom: 30,
  },
});