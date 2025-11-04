import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const p = Number(peso);
    const a = Number(altura);

    if (!p || !a) {
      setResultado('Por favor, insira peso e altura válidos.');
      return;
    }

    const imc = p / (a * a);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <View style={styles.container}>
    <View style={styles.calculadora}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <Text>Peso (kg):</Text>
      <TextInput
        placeholder="Ex: 70"
        style={styles.input}
        value={peso}
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <Text>Altura (m):</Text>
      <TextInput
        placeholder="Ex: 1.75"
        style={styles.input}
        value={altura}
        keyboardType="numeric"
        onChangeText={setAltura}
      />

      <View style={styles.botoes}>
        <Button title="Calcular" onPress={calcularIMC} />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
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
  },
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
});