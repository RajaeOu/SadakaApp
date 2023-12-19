import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Navigator() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/Accueil">
            <MaterialIcons name="home" size={24} color="#ff3399" style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/CarteScreen">
            <FontAwesome5 name="map" size={24} color="#ff3399" style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/MesAnnonces">
            <FontAwesome5 name="bullhorn" size={24} color="#ff3399" style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/MesDemandes">
            <MaterialIcons name="playlist-add" size={24} color="#ff3399" style={styles.iconst} />
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ff66b2', // Dark pink color
    height: 40, // Reduced height
  },
  iconb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconst: {
    color: '#ecf0f1',
  },
});
