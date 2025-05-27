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

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    // MOCKANDO dados locais para testes
    const fakeBalance = [
      { tag: 'Receita', saldo: 1500 },
      { tag: 'Despesas', saldo: -450 },
    ];

    const fakeReceives = [
      { id: '1', label: 'Freelance React Native', value: 1200, date: '25/05/2025', type: 'Receita' },
      { id: '2', label: 'Lanche', value: 25, date: '25/05/2025', type: 'Despesas' },
      { id: '3', label: 'Conta de Luz', value: 100, date: '25/05/2025', type: 'Despesas' },
    ];

    setListBalance(fakeBalance);
    setMovements(fakeReceives);
  }, [isFocused, dateMovements]);

  
  async function handleDelete(id) {
    const novaLista = movements.filter(item => item.id !== id);
    setMovements(novaLista);
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