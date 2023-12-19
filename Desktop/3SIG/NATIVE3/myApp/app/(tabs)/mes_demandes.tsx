import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'column', // Aligne les éléments horizontalement
    alignItems: 'center', // Centre les éléments verticalement
  },
  image: {
    width: 30,
    height:30 ,
  },
  image2: {
    width: 73,
    height: 70,
    margin: 10,
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 48,
    color: '#fff3f3',
  },
});

const Box = () => {
  
  return (
    <View style={[styles.container, { backgroundColor: '#800020' }]}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../../assets/images/Group.png')} // Assurez-vous que l'image est correctement située
        />
       
         <Image
          style={styles.image2}
          source={require('../../assets/images/sad.png')} // Assurez-vous que l'image est correctement située
        />
        <Link href={"/tab2/page1"}><Text style={styles.text}>SADAKA</Text></Link>
      </View>
      
    </View>

  );
};

export default Box;
