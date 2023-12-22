import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const Helpsupport = () => {
  const supportEmail = 'support@sadakaapp.com';

  const handleContactSupport = () => {
    Linking.openURL(`mailto:${supportEmail}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aide & Support</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Questions Fréquemment Posées (FAQ)</Text>
        <Text style={styles.sectionContent}>
          Q : Comment puis-je faire un don ?
          {'\n'}
          R : Pour faire un don, accédez à la section des dons et suivez les instructions.
        </Text>

        {/* Ajoutez plus de questions fréquemment posées au besoin */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contactez-nous</Text>
        <Text style={styles.sectionContent}>
          Si vous avez d'autres questions ou avez besoin d'aide, veuillez contacter notre équipe de support à :
          {'\n'}
          {supportEmail}
        </Text>
      </View>

      <TouchableOpacity style={styles.contactButton} onPress={handleContactSupport}>
        <Text style={styles.contactButtonText}>Contacter le support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    marginLeft:90,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 12,
  },
  contactButton: {
    backgroundColor: '#8B0000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Helpsupport;