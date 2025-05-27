import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {

  const labelName = useMemo(() => {
    const tag = data.tag?.toLowerCase() || '';

    if (tag === 'saldo') {
      return {
        label: 'Saldo atual',
        color: '#2A9C88'
      };
    } else if (tag === 'receita') {
      return {
        label: 'Entradas de hoje',
        color: '#2CC9AD'
      };
    } else {
      return {
        label: 'Saídas de hoje',
        color: '#EF463A'
      };
    }
  }, [data]);

  const saldoFormatado = data.saldo
    ? Number(data.saldo).toFixed(2).replace('.', ',')
    : '0,00';

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {saldoFormatado}</Balance>
    </Container>
  );
}
