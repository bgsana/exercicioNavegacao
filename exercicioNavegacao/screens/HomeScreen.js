import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            <View style={styles.botao}>
                <Button title='Ir para a calculadora' onPress={() => navigation.navigate('Calculadora')} />
            </View>
            <View style={styles.botao}>
                <Button title='Ir para o IMC' onPress={() => navigation.navigate('IMC')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    botao: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 8,
    }
});
