import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// 🧪 Ative ou desative a simulação de login direto aqui
const mockSigned = true;

export default function Routes() {
  const loading = false; // Desliga o loading nesse modo manual

  if (loading) {
    return (
      <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0FEFF',
        }}
      >
        <ActivityIndicator size="large" color="#2CC9AD" />
      </View>
    );
  }

  return mockSigned ? <AppRoutes /> : <AuthRoutes />;
}
