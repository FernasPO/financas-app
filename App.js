import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

//  Firebase está comentado, e o login é mockado com mockSigned no routes/index.js
// Isso permite mostrar o app direto nas funcionalidades sem login real

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
