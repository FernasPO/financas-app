import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api'; // 🔁 Voltando a API mockada

// =======================
// 🔒 Firebase desativado para testes locais
// =======================
// import { auth } from '../Firebase';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut as firebaseSignOut,
//   onAuthStateChanged,
// } from 'firebase/auth';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        try {
          const response = await api.get('/me', {
            headers: {
              'Authorization': `Bearer ${storageUser}`,
            },
          });

          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
        } catch {
          setUser(null);
        }
      }

      setLoading(false);
    }

    loadStorage();

    // =======================
    // 🔒 Firebase authState (comentado)
    // =======================
    /*
    const unsubscribe = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        const { uid, email } = userFirebase;

        const userData = {
          uid,
          email,
        };

        setUser(userData);
        await AsyncStorage.setItem('@finUser', JSON.stringify(userData));
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
    */
  }, []);

  async function signUp(email, password, nome) {
    setLoadingAuth(true);

    try {
      await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      });

      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log('ERRO AO CADASTRAR', err);
      setLoadingAuth(false);
    }

    // =======================
    // 🔒 Firebase signUp (comentado)
    // =======================
    /*
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      const userData = {
        uid,
        nome,
        email,
      };

      setUser(userData);
      await AsyncStorage.setItem('@finUser', JSON.stringify(userData));
      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("ERRO AO CADASTRAR", err);
      setLoadingAuth(false);
    }
    */
  }

  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const { id, name, token } = response.data;

      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finToken', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });

      setLoadingAuth(false);
    } catch (err) {
      console.log('ERRO AO LOGAR', err);
      setLoadingAuth(false);
    }

    // =======================
    // 🔒 Firebase signIn (comentado)
    // =======================
    /*
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      const userData = {
        uid,
        email,
      };

      setUser(userData);
      await AsyncStorage.setItem('@finUser', JSON.stringify(userData));
      setLoadingAuth(false);
    } catch (err) {
      console.log("ERRO AO LOGAR", err);
      setLoadingAuth(false);
    }
    */
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);

    // =======================
    // 🔒 Firebase signOut (comentado)
    // =======================
    // await firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
