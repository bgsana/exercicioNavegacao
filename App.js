import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen';
import ImcScreen from './screens/ImcScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.navigator initialRouteName='Home'>
        <Tab.Screen name='Home'
        component={HomeScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) =>
          (<Ionicons name='home-outline' color={color} size={size}/>)
        }} />
        <Tab.Screen name='Calculadora Simples'
        component={CalculadoraScreen}
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color, size }) =>
          (<Ionicons name='home-outline' color={color} size={size}/>)
        }} />
        <Tab.Screen name='Calculadora IMC'
        component={ImcScreen}
        options={{
          title: 'IMC',
          tabBarIcon: ({ color, size }) =>
          (<Ionicons name='home-outline' color={color} size={size}/>)
        }} />
      </Tab.navigator>
    </NavigationContainer>
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