import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


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
  return (
    <View style={styles.categoriesContainer}>
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
