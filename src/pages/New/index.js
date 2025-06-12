import React, { useState } from 'react';

import { Background, Input, SubmitButton, SubmitText } from './styles';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';

import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { db, auth } from '../../Firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function New() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(valueInput)) || type === null) {
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Continuar', onPress: () => handleAdd() }
      ]
    );
  }

  async function handleAdd() {
    Keyboard.dismiss();

    const uid = auth.currentUser?.uid;
    if (!uid) {
      alert('Usuário não autenticado');
      return;
    }

    try {
      await addDoc(collection(db, 'transacoes'), {
        tipo: type,
        valor: parseFloat(valueInput),
        categoria: labelInput,
        data: format(new Date(), 'yyyy-MM-dd'), 
        uidUsuario: uid,
      });

      setLabelInput('');
      setValueInput('');
      navigation.navigate('Home');

    } catch (error) {
      console.error('Erro ao salvar transação:', error);
      alert('Erro ao registrar movimentação.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />

        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />

          <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
