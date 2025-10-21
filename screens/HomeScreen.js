import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Inicial</Text>
            <View style={styles.botao}>
                <Button title='Ir para a calculadora' onPress={() => navigation.navigate('Calculadora')} />
            </View>
            <View style={styles.botao}>
                <Button title='Ir para o IMC' onPress={() => navigation.navigate('IMC')} />
            </View>
        </View>
    );
}