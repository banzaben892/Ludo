import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface PlayerZoneProps {
  color: 'green' | 'yellow' | 'red' | 'blue';
}

const PlayerZone: React.FC<PlayerZoneProps> = ({ color }) => {
  const bgColor = Colors[color];

  return (
    <View style={[styles.zone, { backgroundColor: bgColor }]}>
      <View style={styles.homeContainer}>
        {[1, 2, 3, 4].map((index) => (
          <View key={index} style={styles.token} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  zone: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  homeContainer: {
    width: '75%',
    aspectRatio: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  token: {
    width: '40%',
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
});

export default PlayerZone;
