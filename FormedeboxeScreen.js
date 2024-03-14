import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FormedeboxeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Formes de boxes</Text>

      <View style={styles.card}>
        <Image
          source={require('./assets/logoa.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe EDUCATIVE</Text>
        <Text style={styles.cardText}>boxe avec coup non porté</Text>
        <Text style={styles.cardText}>Prix: 150€</Text>
        <Text style={styles.cardText}>Quantité: 15</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logob.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe Amateur </Text>
        <Text style={styles.cardText}>boxe avec coup porté avec casque</Text>
        <Text style={styles.cardText}>Prix: 150€</Text>
        <Text style={styles.cardText}>Quantité: 15</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logodc.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe Pro </Text>
        <Text style={styles.cardText}>boxe sans casque bandage dur</Text>
        <Text style={styles.cardText}>Prix: 150£</Text>
        <Text style={styles.cardText}>Quantité: 15</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logod.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Aeroboxe </Text>
        <Text style={styles.cardText}>boxe choregraphier</Text>
        <Text style={styles.cardText}>Prix: 150€</Text>
        <Text style={styles.cardText}>Quantité: 15</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black', // Fond blanc
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: {
    color: 'white', // Texte noir
    textAlign: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Texte noir
    marginBottom: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    color: 'white', // Texte noir
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FormedeboxeScreen;
