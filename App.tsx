import React from 'react';
import { StyleSheet, View } from 'react-native';
import LudoBoard from './src/screens/LudoBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <LudoBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
