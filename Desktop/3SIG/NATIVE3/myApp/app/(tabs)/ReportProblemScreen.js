import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const ReportProblemScreen = () => {
  const [problemDescription, setProblemDescription] = useState('');

  const handleReportProblem = () => {
    if (problemDescription.trim() === '') {
      Alert.alert('Error', 'Please provide a problem description.');
      return;
    }

    // Ici, vous pouvez ajouter le code pour envoyer le rapport de problème à votre backend ou effectuer toute autre action nécessaire.

    // Réinitialiser le champ de description après le signalement
    setProblemDescription('');

    // Afficher un message de succès ou naviguer vers une autre page si nécessaire
    Alert.alert('Success', 'Problem reported successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Report a Problem</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Describe the problem..."
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleReportProblem}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft:60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top', // Permet de faire défiler le texte vers le haut dans le TextInput multiligne
  },
  button: {
    backgroundColor: '#8F2121',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReportProblemScreen;