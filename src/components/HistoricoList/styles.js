import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F0F4FF;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 14px;
`;

export const Tipo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TipoText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#EF463A' : '#00B94A'};
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 4px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
  font-weight: 600;
`;
