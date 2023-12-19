import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Navigator from '../../components/Navigator';
import { Linking } from 'react-native';


interface ItemType {
  id: string;
  title: string;
  date: string;
  quantity: number;
  state: string;
  image: number;
}

const MesDemandes = () => {
    const [data, setData] = useState<ItemType[]>([
        {
          id: '1',
          title: 'Annonce 1',
          date: '01/01/2023',
          quantity: 3,
          state: 'En attente',
          image: require('../../assets/images/a.jpg'),
        },
        {
          id: '3',
          title: 'Annonce 3',
          date: '02/01/2023',
          quantity: 24,
          state: 'Acceptée',
          image: require('../../assets/images/b.jpg'),
        },
        {
            id: '4',
            title: 'Annonce 4',
            date: '02/01/2023',
            quantity: 5,
            state: 'En attente',
            image: require('../../assets/images/a.jpg'),
          },{
            id: '5',
            title: 'Annonce 5',
            date: '02/01/2023',
            quantity: 2,
            state: 'Acceptée',
            image: require('../../assets/images/b.jpg'),
          },{
            id: '6',
            title: 'Annonce 6',
            date: '02/01/2023',
            quantity: 2,
            state: 'En attente',
            image: require('../../assets/images/a.jpg'),
          },{
            id: '7',
            title: 'Annonce 7',
            date: '02/01/2023',
            quantity: 2,
            state: 'En attente',
            image: require('../../assets/images/r.jpg'),
          },{
            id: '8',
            title: 'Annonce 8',
            date: '02/01/2023',
            quantity: 21,
            state: 'En attente',
            image: require('../../assets/images/b.jpg'),
          },{
            id: '9',
            title: 'Annonce 9',
            date: '02/01/2023',
            quantity: 8,
            state: 'En attente',
            image: require('../../assets/images/a.jpg'),
          },
        ]);

  const handleDelete = (itemId: string) => {
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de vouloir supprimer cette demande ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            const updatedData = data.filter((item) => item.id !== itemId);
            setData(updatedData);
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleContact = () => {
    const phoneNumber = '+212678345678';
  
    Linking.openURL(`tel:${phoneNumber}`)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Phone Call Not Supported', 'Your device does not support phone calls.');
        }
      })
      .catch((error) => {
        console.error('Error opening phone app:', error);
      });
  };

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Date: {item.date}</Text>
        <Text>Quantité demandée: {item.quantity}</Text>
        <Text>État: {item.state}</Text>
      </View>
      {item.state === 'En attente' && (
        <Pressable onPress={() => handleDelete(item.id)}>
          <FontAwesome name="trash" size={20} color="#FF69B4" />
        </Pressable>
      )}
      {item.state === 'Acceptée' && (
  <Pressable onPress={handleContact}>
    <FontAwesome5 name="phone-alt" size={20} color="#FF69B4" />
  </Pressable>
)}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
});

export default MesDemandes;
