import React, { useState } from 'react';
import { View,Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Navbar() {
  const [isProfilePressed, setProfilePressed] = useState(false);
  const [isSearchPressed, setSearchPressed] = useState(false);
  const [isNotificationPressed, setNotificationPressed] = useState(false);

  const handleProfilePress = () => {
    // Ajoutez votre logique de gestion du clic pour le profil ici
    console.log('Profile Pressed');
  };

  const handleSearchPress = () => {
    // Ajoutez votre logique de gestion du clic pour la recherche ici
    console.log('Search Pressed');
  };

  const handleNotificationPress = () => {
    // Ajoutez votre logique de gestion du clic pour la notification ici
    console.log('Notification Pressed');
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.iconb,
          { backgroundColor: pressed ? '#FFC0B7' : 'transparent' },
        ]}
        onPress={handleProfilePress}
        onPressIn={() => setProfilePressed(true)}
        onPressOut={() => setProfilePressed(false)}
      >
        <MaterialIcons
          name="person"
          size={25}
          color={isProfilePressed ? '#E1A0A0' : '#E1A0A0'}
          style={styles.iconst}
        />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.iconb,
          { backgroundColor: pressed ? '#E1A0A0' : 'transparent' },
        ]}
        onPress={handleSearchPress}
        onPressIn={() => setSearchPressed(true)}
        onPressOut={() => setSearchPressed(false)}
      >
        <MaterialIcons
          name="search"
          size={25}
          color={isSearchPressed ? '#E1A0A0' : '#E1A0A0'}
          style={styles.iconst}
        />
        
      </Pressable>
      <TextInput
          placeholder="Recherche..."
          style={{ flex: 1, marginLeft: 5, padding: 5 }}
        />
      <Pressable
        style={({ pressed }) => [
          styles.iconb,
          { backgroundColor: pressed ? '#E1A0A0' : 'transparent' },
        ]}
        onPress={handleNotificationPress}
        onPressIn={() => setNotificationPressed(true)}
        onPressOut={() => setNotificationPressed(false)}
      >
        <FontAwesome5
          name="bell"
          size={25}
          color={isNotificationPressed ? '#E1A0A0' : '#E1A0A0'}
          style={styles.iconst}
        />
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF7F6',
    borderTopWidth: 3,
    borderTopColor: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  iconb: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  iconst: {
    marginRight: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 50, // hauteur de la barre de navigation
  },
});
