import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const MesDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params?.item;

  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Erreur: Les détails de l'annonce ne sont pas disponibles.</Text>
      </View>
    );
  }

  const handleDemanderPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleQuantityChange = (text) => {
    setQuantity(text);
  };
  

  const handleDemanderConfirmation = () => {
    alert(`Demande pour ${quantity} ${item.title}`);
    handleModalClose();
  };
  const handleViewDemandes = (itemId: string) => {
    // Navigate to DemandeSurAnnonceScreen with the item ID
    navigation.navigate('DemandeSurAnnonceScreen', { itemId });
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.actionButtonsContainer}>
              {/* Bouton Modifier */}
              <Pressable style={styles.iconButton}>
                <Feather name="edit" size={24} color="white" />
              </Pressable>
              {/* Bouton Supprimer */}
              <Pressable style={styles.iconButton}>
                <Feather name="trash-2" size={24} color="white" />
              </Pressable>
              {/* Bouton Yeux */}
              <Pressable onPress={() => handleViewDemandes(item.id)} style={styles.iconButton}>
                <Feather name="eye" size={24} color="white" />
              </Pressable>
            </View>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Spécifier la quantité</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder="Quantité"
              keyboardType="numeric"
              value={quantity}
              onChangeText={handleQuantityChange}
            />
            <Pressable style={styles.iconButton} onPress={handleDemanderConfirmation}>
              <Feather name="check" size={24} color="white" />
            </Pressable>
            <Pressable style={styles.iconButton} onPress={() => setModalVisible(false)}>
              <Feather name="x" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 6,
    marginBottom: 16,
    marginTop:25,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color:'gray',
  },
  author: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    color: '#505050',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    color: '#505050',
  },
  orderButton: {
    backgroundColor: '#FF69B4', // Rose clair
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Styles for the modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  iconButton: {
    backgroundColor: '#E75480', // Couleur rose indien
    padding: 10,
    borderRadius: 50, // Utilisez une valeur suffisamment grande pour obtenir une forme de cercle
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Centrer les éléments horizontalement
    marginTop: 8,
    marginBottom:8,
  },
});

export default MesDetails;