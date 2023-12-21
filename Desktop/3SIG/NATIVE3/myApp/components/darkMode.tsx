import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => {
    setDarkMode((previousState) => !previousState);
    // Ajoutez ici la logique pour basculer entre le mode sombre et le mode clair
    // Cela peut impliquer le changement de thème, l'utilisation de contexte, etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
  },
});

export default DarkModeSwitch;
