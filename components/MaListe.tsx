import React, { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

const MaListe = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState('');

  const data = [
    { id: '1', title: 'Pizza', image: require('../assets/images/a.jpg'), author: 'Imane', location: 'Rabat', date: '2023-12-13' },
    { id: '2', title: 'Chaise', image: require('../assets/images/b.jpg'), author: 'soukaina', location: 'Fes', date: '2022-12-13' },
    { id: '3', title: 'Book', image: require('../assets/images/r.jpg'), author: 'rajae', location: 'Tata', date: '2023-03-21' },
    { id: '4', title: 'Food', image: require('../assets/images/a.jpg'), author: 'hamza', location: 'Casablanca', date: '2020-02-13' },
  ];

  const navigateToDetail = (item) => {
    setSelectedItem(item);
    navigation.navigate("MesDetails", { item });
  };

  const handleDemanderPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleViewDemandes = (itemId: string) => {
    // Navigate to DemandeSurAnnonceScreen with the item ID
    navigation.navigate('DemandeSurAnnonceScreen', { itemId });
  };

  const handleDemanderConfirmation = () => {
    // Mettez ici le code pour traiter la demande avec la quantité spécifiée
    alert(`Demande pour ${quantity} ${selectedItem.title}`);
    // Fermez la modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Pressable onPress={() => navigateToDetail(item)}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </Pressable>
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
        )}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Spécifier la quantité</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder="Quantité"
              keyboardType="numeric"
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
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
  itemContainer: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 20,
    overflow: 'hidden', // Ensure the borderRadius is applied to the child components
    borderColor: '#C8C8C8',
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  author: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
    marginBottom: 3,
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    color: '#505050',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: '#505050',
    marginTop: 3, // Ajout d'une marge pour l'espacement
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Centrer les éléments horizontalement
    marginTop: 8,
    marginBottom:8,
  },
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
});

export default MaListe;
