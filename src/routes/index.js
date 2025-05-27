import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// Altere para true se quiser simular usuário logado
const mockSigned = true;

function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0FEFF'
        }}>
        <ActivityIndicator size="large" color="#2CC9AD" />
      </View>
    );
  }

  return mockSigned ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
