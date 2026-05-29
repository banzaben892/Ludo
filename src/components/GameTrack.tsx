import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GameTrackProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
}

const GameTrack: React.FC<GameTrackProps> = ({ direction }) => {
  const isHorizontal = direction === 'top' || direction === 'bottom';

  return (
    <View style={[styles.track, isHorizontal ? styles.horizontal : styles.vertical]}>
      {[...Array(6)].map((_, i) => (
        <View key={i} style={styles.square} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  square: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default GameTrack;
