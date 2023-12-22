import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Composant de la page Conditions et Politiques
const ConditionsPolitiquesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Conditions et Politiques</Text>

      <Text style={styles.sectionHeading}>1. Introduction</Text>
      <Text style={styles.paragraph}>
        Bienvenue sur l'application Sadaka de gestion de dons gratuit. En utilisant cette application, vous acceptez les conditions et politiques énoncées ci-dessous.
      </Text>

      <Text style={styles.sectionHeading}>2. Utilisation de l'Application</Text>
      <Text style={styles.paragraph}>
        L'utilisation de l'application Sadaka est soumise aux conditions suivantes : ...
        (Ajoutez ici toutes les conditions d'utilisation spécifiques à votre application.)
      </Text>

      <Text style={styles.sectionHeading}>3. Collecte de Données</Text>
      <Text style={styles.paragraph}>
        L'application Sadaka peut collecter des informations personnelles conformément à notre politique de confidentialité.
      </Text>

      <Text style={styles.sectionHeading}>4. Modifications des Conditions</Text>
      <Text style={styles.paragraph}>
        Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur l'application.
      </Text>

      <Text style={styles.sectionHeading}>5. Contact</Text>
      <Text style={styles.paragraph}>
        Pour toute question concernant ces conditions, veuillez nous contacter à l'adresse suivante : support@sadaka-app.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Fond blanc
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'pink', // Texte rose
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default ConditionsPolitiquesScreen;