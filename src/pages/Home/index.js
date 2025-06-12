import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal } from 'react-native';

import Header from '../../components/Header';
import {
  Background,
  ListBalance,
  Area,
  Title,
  List
} from './styles';

import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';

import BalanceItem from '../../components/BalanceItem';
import HistoricoList from '../../components/HistoricoList';
import CalendarModal from '../../components/CalendarModal';

import Icon from 'react-native-vector-icons/MaterialIcons';

// 🔥 Firebase imports (desativado temporariamente)
// import { db, auth } from '../../Firebase';
// import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    // 🔁 MOCK DE DADOS - usado no lugar do Firebase
    const dataHoje = format(dateMovements, 'dd/MM/yyyy');

    const fakeReceives = [
      { id: '1', label: 'Freelance React Native', value: 1200, date: '10/06/2025', type: 'Receita' },
      { id: '2', label: 'Lanche', value: 25, date: '10/06/2025', type: 'Despesas' },
      { id: '3', label: 'Conta de Luz', value: 100, date: '11/06/2025', type: 'Despesas' },
      { id: '4', label: 'Venda notebook', value: 3000, date: '11/06/2025', type: 'Receita' },
    ];

    const filtrados = fakeReceives.filter(item => item.date === dataHoje);

    let entrada = 0;
    let saida = 0;

    filtrados.forEach(item => {
      if (item.type === 'Receita') {
        entrada += item.value;
      } else if (item.type === 'Despesas') {
        saida += item.value;
      }
    });

    setMovements(filtrados);
    setListBalance([
      { tag: 'Receita', saldo: entrada },
      { tag: 'Despesas', saldo: -saida }, // apenas visual
    ]);
  }, [isFocused, dateMovements]);

  // 🔁 Desativado porque não há conexão com Firestore
  async function handleDelete(id) {
    // await deleteDoc(doc(db, 'transacoes', id));
    setMovements(prev => prev.filter(item => item.id !== id));
  }

  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected);
  }

  return (
    <Background>
      <Header title="Minhas movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#2CC9AD" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}