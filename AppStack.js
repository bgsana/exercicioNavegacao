import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import ImcScreen from './screens/ImcScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';

const Stack = createStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name = 'Calculadora Simples' component={CalculadoraScreen} />
        <Stack.Screen name = 'Calculadora IMC' component={ImcScreen} />
      </Stack.navigator>
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