import { StyleSheet, View } from 'react-native';
import React from 'react';
import RegForm from './components/RegForm';

export default function App() {
 
  return (
    <View style={styles.container}>
      <RegForm />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
