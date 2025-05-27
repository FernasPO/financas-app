import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #F0FEFF; 
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #FFFFFF;
  font-size: 17px;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 14px;
  border-radius: 4px;
  color: #171717; 
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #2AC98D; 
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #FFFFFF;
  font-size: 21px;
  font-weight: bold;
`;
