import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const Authentication = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');


  
  const handleLogin = () => {
    const newUser = {  login, password };
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Nouvel utilisateur ajouté :', data);
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Group.png')} // Assurez-vous que l'image est correctement située
      />

      <Image
        style={styles.image2}
        source={require('../../assets/images/sad.png')} // Assurez-vous que l'image est correctement située
      />
      <View style={styles.overlay}>

        
        
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
             <Link href={"/Acceuil1"}><Text style={styles.buttonText}>Se connecter</Text></Link>
          </TouchableOpacity>
        </View>
        <Link href={"/tab2/page4"}><Text style={styles.inputLabel}>{'\n'} {'\n'}N'avez vous pas de compte?</Text></Link>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fond semi-transparent gris

  },
  overlay: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '100%',

  },

  inputContainer: {
    marginBottom: 10,
    justifyContent: 'center',

  },
  image2: {
    width: 50,
    height: 50,
    margin: 10,
  },
  inputLabel: {
    fontWeight: 'normal',
    marginBottom: 40,
    paddingBottom: 70,

    marginLeft: 0,
    paddingLeft: 0,

    color: '#010011',



  },
  image: {
    width: 25,
    height: 25,
    margin: 5,
  },
  input: {
    width: '50%',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 50,
    marginBottom: 50,
    borderRadius: 10, // Coins arrondis
    marginLeft: 90,


  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#9D2143', // Couleur de fond du bouton en pourpre foncé
    borderRadius: 10, // Coins arrondis
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Couleur du texte en blanc
    fontWeight: 'bold',
  },
});
export default Authentication;
