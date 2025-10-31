import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ImcScreen from './screens/ImcScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="IMC"
          component={ImcScreen}
          options={{
            title: 'IMC',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculadora"
          component={CalculadoraScreen}
          options={{
            title: 'Calculadora Simples',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}