import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import PlayerZone from '../components/PlayerZone';
import GameTrack from '../components/GameTrack';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');
const boardSize = Math.min(width, height) - 20;

const LudoBoard: React.FC = () => {
  const [diceValue, setDiceValue] = useState(0);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceValue(dice);
    Alert.alert('Dice', `You rolled: ${dice}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 LUDO GAME 🎲</Text>
      
      <View style={[styles.board, { width: boardSize, height: boardSize }]}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <PlayerZone color="green" />
          <GameTrack direction="top" />
          <PlayerZone color="yellow" />
        </View>

        {/* Middle Section */}
        <View style={styles.middleSection}>
          <GameTrack direction="left" />
          <View style={styles.center}>
            <View style={[styles.centerTriangle, styles.triangle1]} />
            <View style={[styles.centerTriangle, styles.triangle2]} />
            <View style={[styles.centerTriangle, styles.triangle3]} />
            <View style={[styles.centerTriangle, styles.triangle4]} />
          </View>
          <GameTrack direction="right" />
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <PlayerZone color="red" />
          <GameTrack direction="bottom" />
          <PlayerZone color="blue" />
        </View>
      </View>

      {/* Dice Display */}
      <View style={styles.diceContainer}>
        <View style={styles.diceDisplay}>
          <Text style={styles.diceText}>{diceValue || '?'}</Text>
        </View>
      </View>

      {/* Controls */}
      <TouchableOpacity style={styles.diceButton} onPress={rollDice}>
        <Text style={styles.diceButtonText}>🎲 Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  board: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
  },
  middleSection: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centerTriangle: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  triangle1: {
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.green,
  },
  triangle2: {
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderTopWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.yellow,
  },
  triangle3: {
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.red,
  },
  triangle4: {
    borderLeftWidth: 35,
    borderRightWidth: 35,
    borderTopWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.blue,
  },
  diceContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  diceDisplay: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  diceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  diceButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  diceButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LudoBoard;
