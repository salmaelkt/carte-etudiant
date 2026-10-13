import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI ORANGERS</Text>
      </View>

      {/* Bloc info étudiant */}
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>EL KHAYAT</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>SALMA</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 220,
    height: 220,
    marginRight: 20,
  },
  schoolName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4f3928', // 🟠 Orange vif
    letterSpacing: 1,
  },
  info: {
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#111827',
    fontWeight: 'bold',
  },
});