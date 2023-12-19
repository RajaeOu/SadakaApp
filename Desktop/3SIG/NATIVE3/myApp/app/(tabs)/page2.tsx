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
    position: 'absolute', // Position absolue
    bottom: 0, // Au sommet de l'écran
    width: 400,
    height:400,
    
  },
  image1: {
    position: 'absolute', // Position absolue
    bottom: 4, // Au sommet de l'écran
    width: 40,
    height: 5,
    left:175,
    
  },
  image2: {
    position: 'absolute', // Position absolue
    bottom: 1, // Au sommet de l'écran
    width: 60,
    height: 60,
    left:164,
    
  },
  container3: {
    width: 23,
    height: 100,
    position: 'absolute',
    top: 80,
    left: 0,
  },
 
  text: {
    //fontFamily: 'Inter-Bold', // Utilisez une police similaire disponible
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1a2441',
    textAlign: 'center',
    lineHeight: 48,
    Bottom:30,
    position:'absolute',
    
  },
  text1: {
    //fontFamily: 'Inter-Bold', // Assurez-vous d'ajouter la police dans votre projet
    fontWeight: 'normal',
    fontSize: 16,
    color: '#9ca5bb',
    textAlign: 'center',
    lineHeight: 19, // Ajustez la valeur en fonction de vos besoins
    marginBottom:20,
    alignItems: 'center',

  },
  container1: {
    width: 400,
    height: 100,
    position: 'absolute',
    top: 500,
    left: 10,
  },
});

const Box = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../../assets/images/grouu.png')} // Assurez-vous que l'image est correctement située
        />
    
        <Text style={styles.text}>We Can Help

        {"\n"}
        Poor People</Text>
       
      </View>
      <View style={styles.container1}>
      <Text style={styles.text1}>
      When we give cheerfully and accept {"\n"} 
      grateully, everyone is blessed
      </Text>
       <Image
          style={styles.image1}
          source={require('../../assets/images/deuxTirets.png')} // Assurez-vous que l'image est correctement située
        />
       <Link href={"/Accueil1"}><View style={styles.container3}>
        <Image       
        source={require('../../assets/images/fleche.png')}
        style={styles.image2}
        />
      </View></Link>

    </View>

    </View>
  );
};

export default Box;
