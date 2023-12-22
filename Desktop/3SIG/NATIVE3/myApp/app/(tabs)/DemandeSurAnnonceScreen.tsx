import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Navigator from './Navigator';

interface DemandeType {
  id: string;
  demandeur: string;
  date: string;
  quantity: number;
  state: string;
  image: number;
}

const DemandeSurAnnonceScreen = () => {
  const [demandes, setDemandes] = useState<DemandeType[]>([
    {
      id: '1',
      demandeur: 'Demandeur 1',
      date: '01/01/2023',
      quantity: 3,
      state: 'En attente',
      image: require('../../assets/images/img.jpeg'),
    },
    {
      id: '3',
      demandeur: 'Demandeur 2',
      date: '02/01/2023',
      quantity: 24,
      state: 'Acceptée',
      image: require('../../assets/images/img.jpeg'),
    },
    {
      id: '4',
      demandeur: 'Demandeur 3',
      date: '02/01/2023',
      quantity: 24,
      state: 'En attente',
      image: require('../../assets/images/img.jpeg'),
    },
    {
      id: '5',
      demandeur: 'Demandeur 4',
      date: '02/01/2023',
      quantity: 24,
      state: 'En attente',
      image: require('../../assets/images/img.jpeg'),
    },
    {
      id: '6',
      demandeur: 'Demandeur 5',
      date: '02/01/2023',
      quantity: 24,
      state: 'En attente',
      image: require('../../assets/images/img.jpeg'),
    },
  ]);

  const handleAccept = (demandeId: string) => {
    const updatedDemandes = demandes.map((demande) =>
      demande.id === demandeId ? { ...demande, state: 'Acceptée' } : demande
    );
    setDemandes(updatedDemandes);
  };

  const handleReject = (demandeId: string) => {
    const updatedDemandes = demandes.filter((demande) => demande.id !== demandeId);
    setDemandes(updatedDemandes);
  };

  const renderItem = ({ item }: { item: DemandeType }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.demandeur}</Text>
        <Text>Date: {item.date}</Text>
        <Text>Quantité demandée: {item.quantity}</Text>
        <Text>État: {item.state}</Text>
      </View>
      {item.state === 'En attente' && (
        <View style={styles.iconContainer}>
          <Pressable onPress={() => handleAccept(item.id)}>
            <FontAwesome5 name="check" size={20} color="#FF69B4" style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => handleReject(item.id)}>
            <FontAwesome5 name="times" size={20} color="#FF69B4" style={styles.icon} />
          </Pressable>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={demandes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default DemandeSurAnnonceScreen;