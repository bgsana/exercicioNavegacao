import {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export default function CalculadoraScreen() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [res, setRes] = useState('')

    const somar = () => {
        setRes(parseInt(num1) + parseInt(num2))
    }
    const subtrair = () => {
        setRes(parseInt(num1) - parseInt(num2))
    }
    const multip = () => {
        setRes(parseInt(num1) * parseInt(num2))
    }
    const dividir = () => {
        setRes(parseInt(num1) / parseInt(num2))
    }

    return (
        <View style={styles.calculadora}>
            <Text style={styles.titulo}>Calculadora</Text>

            <Text>Digite o 1º número: </Text>
            <TextInput placeholder="" style={styles.input} value={num1} onChangeText={setNum1} />

            <Text>Digite o 2º número: </Text>
            <TextInput placeholder="" style={styles.input} value={num2} onChangeText={setNum2} />

            <View style={styles.botoes}>
                <Button title="Somar" onPress={() => somar()} />
                <Button title="Subtrair" onPress={() => subtrair()} />
                <Button title="Multiplicar" onPress={() => multip()} />
                <Button title="Dividir" onPress={() => dividir()} />
            </View>

            <Text style={styles.resultado}>Resultado: {res}</Text>

        </View>
    )
}

const styles = StyleSheet.create
(
    {
        calculadora: {
            width: 300,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#ffffff',
        },

        titulo: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            textAlign: 'center',
            color: '#7a4fc3',
        },

        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical: 8,
            height: 40,
        },

        botoes: {
            marginVertical: 10,
            gap: 5,
            color: '#7a4fc3',
        },

        resultado: {
            marginTop: 15,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',

        },
    }
);
