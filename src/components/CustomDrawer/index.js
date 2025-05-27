import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
  const { user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}
      >
        <Image
          source={require('../../assets/Logo.png')}
          style={{ width: 190, height: 190 }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 25,
            marginTop: 25,
            color: '#171717',
            fontWeight: 'bold',
          }}
        >
          Bem-vindo
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 14,
            paddingHorizontal: 20,
            color: '#2CC9AD',
          }}
          numberOfLines={1}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
