import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #F0F4FF; 
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
  width: 160px;
  height: 160px;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #171717;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  flex: 1;
  color: #171717;
  font-size: 17px;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #e6e6e6;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #2CC9AD;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const LinkText = styled.Text`
  color: #2CC9AD;
  font-size: 16px;
  font-weight: 500;
`;
