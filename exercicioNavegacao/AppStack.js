import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ImcScreen from './screens/ImcScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Calculadora" 
          component={CalculadoraScreen} 
        />
        <Stack.Screen 
          name="IMC" 
          component={ImcScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
