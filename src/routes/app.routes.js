import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, StyleSheet } from 'react-native';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#E3E7FF',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#3B3DBF',
        drawerInactiveBackgroundColor: 'transparent',
        drawerLabelStyle: {
          marginLeft: -15,
        },
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.active]}>
              Início
            </Text>
          ),
        }}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
        options={{
          drawerLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.active]}>
              Registrar Movimento
            </Text>
          ),
        }}
      />

      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.active]}>
              Perfil do Usuário
            </Text>
          ),
        }}
      />
    </AppDrawer.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#171717',
  },
  active: {
    color: '#FFFFFF',
  },
});

export default AppRoutes;
