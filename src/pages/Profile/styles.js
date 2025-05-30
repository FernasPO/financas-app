import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F0FEFF; 
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #171717; 
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding-left: 14px;
  padding-right: 14px;
  color: #2CC9AD; 
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #2A9C88; 
  width: 90%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 45px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #EF463A;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #EF463A;
`;
