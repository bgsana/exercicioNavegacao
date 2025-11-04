import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ImcScreen from './screens/ImcScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home-outline' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Calculadora Simples'
          component={CalculadoraScreen}
          options={{
            title: 'Calculadora',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='calculator-outline' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name='Calculadora IMC'
          component={ImcScreen}
          options={{
            title: 'IMC',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='fitness-outline' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

