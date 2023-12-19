import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';


const Authentication = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [login, setLogin] = useState('');
  const [tel, setTel] = useState('');
 

  const isValidPassword = (password:String) => {
    // Vérifier que le mot de passe est supérieur à 6 caractères
    return password.length > 6;
  };
  
  // const handleLogin = () => {
  //     if (!isValidPassword(password)) {
  //     alert('Le mot de passe doit comporter au moins 6 caractères.');
  //   } else {
  //   const newUser = { nom, login, tel, password };
  //   fetch('http://localhost:3000/utilisateurs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Nouvel utilisateur ajouté :', data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
  //     });
  // }};
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8086/utilisateur/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'text/plain;charset=UTF-8',
  //       },
  //       body: JSON.stringify({nom, login, tel, password }),
  //     });

  //     if (response.ok) {
  //       // Utilisateur inscrit avec succès, vous pouvez gérer la réponse ici
  //       console.log('Inscription réussie!');
  //     } else {
  //       // Gérer les erreurs, par exemple afficher un message d'erreur
  //       console.error('Erreur lors de l\'inscription');
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la requête d\'inscription', error);
  //   }
  // };
  const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8086/utilisateur/add', {
      nom,
      prenom,
      login,
      tele: tel, // Assurez-vous que le nom de votre propriété correspond à celle attendue par le backend
      password,
    });

    // La requête réussit, vous pouvez gérer la réponse ici
    console.log('Inscription réussie!', response.data);
  } catch (error) {
    // Gérer les erreurs, par exemple afficher un message d'erreur
    console.error('Erreur lors de l\'inscription', error);
  }
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
          placeholder="Nom "
          value={nom}
          onChangeText={(text) => setNom(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Prenom"
          value={prenom}
          onChangeText={(text) => setPrenom(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tel"
          value={tel}
          onChangeText={(text) => setTel(text)}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Repeat password"
          secureTextEntry
          value={password2}
          onChangeText={(text) => setPassword2(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
             <Link href={"/Accueil1"}> 
              <Text style={styles.buttonText}>S'inscrire</Text>
               </Link> 
          </TouchableOpacity>
        </View>

      </View>
      <Link href={"/tab2/page4"}><Text style={styles.inputLabel}>Avez vous déjà un compte?</Text></Link>

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
