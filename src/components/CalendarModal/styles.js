import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3); 
`;

export const ModalContent = styled.View`
  background-color: #FFFFFF;
  margin-top: 100px;
  margin-horizontal: 20px;
  padding: 16px;
  border-radius: 12px;
  elevation: 5;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: #3B3DBF;
  border-radius: 6px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  height: 48px;
`;

export const ButtonFilterText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
`;
