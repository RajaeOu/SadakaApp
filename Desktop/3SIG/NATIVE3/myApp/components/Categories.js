import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import axios from "axios";
const [announcements, setAnnouncements] = useState([]);

const [selectedCategory, setSelectedCategory] = useState(null);

const Categories = () => {
  const items = [
    {
      id: "1",
      name: "Habits",
    },
    {
      id: "2",
      name: "Immeuble",
    },
    {
      id: "3",
      name: "Nourriture",
    },
    {
      id: "4",
      name: "Education",
    },
    {
      id: "5",
      name: "Service",
    },
    {
      id: "6",
      name: "Hospitalisation",
    },
  ];
  const getAnnouncementsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://172.16.32.141:8086/annonces/par-categorie/${categoryId}`);
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces par catégorie:', error);
    }
  };
  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
    getAnnouncementsByCategory(categoryId);
  };
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.categoryItem,
        selectedCategory === item.id && { backgroundColor: "#DB7093" },
      ]}
      onPress={() => handleCategoryPress(item.id)}
    >
      <Text style={[styles.categoryText, selectedCategory === item.id && { color: "white" }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoriesContainer}>
      {/* <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      /> */}
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={items} renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} style={{marginTop:5}}>
              <View style={{marginHorizontal:10,marginVertical:5,padding:5,backgroundColor:"#DB7093",borderRadius:4}}>
                  <Text style={{paddingHorizontal:5,color:"white",fontWeight:"500"}}>{item?.name}</Text>
              </View>
          </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoriesContainer: {
    // marginBottom: 0, // Ajoutez cette ligne
  },
});
