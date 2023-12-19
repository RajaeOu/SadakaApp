import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image,Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; 
import { Link } from 'expo-router';
import axios from 'axios';


// const categories = ['Séléctiooner une catégorie','Vetements','Chaussures' ,'Nouriture', 'Immeubles','Service','Monais','Médicament', 'Autre']; // Liste des catégories
const regions = [
  'Séléctiooner une Région',
  'Tanger-Tétouan-Al Hoceïma',
  'Fès-Meknès',
  'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra',
  'Casablanca-Settat',
  'Marrakech-Safi',
  'Drâa-Tafilalet',
  'Souss-Massa',
  'Guelmim-Oued Noun',
  'Laâyoune-Sakia El Hamra',
  'Dakhla-Oued Ed-Dahab']; // Liste des regions
const communes = [
  'Séléctiooner une commune',
  'Tanger',
  'Tétouan',
  'Chefchaouen',
  'Fahs-Anjra',
  'Al Hoceïma',
  'Mdiq-Fnideq',
  'Ouezzane',
  'Martil',
  'Larache',
  'Asilah',
  'Ksar El Kebir',
  'Oued Laou',
  'Fnideq',
  'Tétouan-Mdiq',
  'Aknoul',
  'Chefchaouen',
  'Bab Taza',
  'Brikcha',
  'Bni Bouayach',
  'Bni Hadifa',]; // Liste des communes


const MonFormulaire = () => {
  // const [showSuccessModal, setShowSuccessModal] = useState(false);
  // const [titre, setTitre] = useState('');
  // const [categorie, setCategorie] = useState(categories[0]);
  // const [province, setProvince] = useState(regions[0]);
  // const [commune, setCommune] = useState(communes[0]);
  // const [quantite, setQuantite] = useState('');
  // const [description, setDescription] = useState('');
  // const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [province, setProvince] = useState(regions[0]);
  const [commune, setCommune] = useState(communes[0]);
   const [image, setImage] = useState(null);
   const [showSuccessModal, setShowSuccessModal] = useState(false);



  useEffect(() => {
    // Fetch categories when the component mounts
    axios.get('http://172.16.32.141:8086/categories/all_categories')
      .then(response => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleFormSubmit = () => {
    const formData = {
      categorie: {
        id: category
      },
      utilisateur: {
        id: 1
      },
      titre: title,
      description: description,
      quantite: quantity,
      date: new Date(),
      commune: commune,
      //statut: "Active",
      // photo: "base64-encoded-image-data"
      statut:"En Cours"
    };
  
    axios.post('http://172.16.32.141:8086/annonces/ajouter', formData)
      .then(response => {
        // Handle success, e.g., show a success message to the user
        console.log(response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message to the user
        console.error('Error submitting form:', error);
      });
  };
  
  const handleChooseImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission d\'accès à la galerie refusée');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };

  const handleTakePhoto = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission d\'accès à la caméra refusée');
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('titre', titre);
  //     formData.append('quantite', quantite);
  //     formData.append('description', description);
  //     formData.append('categorie', categorie);
  //     formData.append('date', Date.now());

  //     formData.append('province', province);
  //     formData.append('commune', commune);
  //     formData.append('image', {
  //       uri: image,
  //       type: 'image/*', // Utilisez 'image/*' pour accepter tous les types d'images
  //       name: 'photo',
  //     });

  //     const response = await axios.post('http://localhost:8086/annonce/add', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.status === 200) {
  //       // Succès, vous pouvez gérer la réponse ici
  //       console.log('Formulaire soumis avec succès!');
  //       setShowSuccessModal(true);
  //     } else {
  //       // Gérer les erreurs, par exemple afficher un message d'erreur
  //       console.error('Erreur lors de la soumission du formulaire');
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la requête de soumission du formulaire', error);
  //   }
  // };

  
  
     
  

  return (
    <ScrollView style={styles.container}>
       <View style={styles.imageTitleContainer}>
       <Image
//  source={require('../../assets/images/donate.jpeg')}
source={require('../../assets/images/donate.jpeg')} // Assurez-vous que l'image est correctement située

  style={styles.headerImage}
/>
        <Text style={styles.title}>Ajouter une annonce</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Titre *"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Quantité *"
          keyboardType="numeric"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Picker selectedValue={category} onValueChange={value => setCategory(value)}>
        <Picker.Item label="Select a category" value="" />
        {categories.map(cat => (
          <Picker.Item key={cat.id} label={cat.nom} value={cat.id} />
        ))}
      </Picker>
        {/* <Picker
          style={styles.input}
          selectedValue={province}
          onValueChange={(itemValue) => setProvince(itemValue)}
        >
          {regions.map((prov, index) => (
            <Picker.Item key={index} label={prov} value={prov} />
          ))}
        </Picker> */}
        <Picker
          style={styles.input}
          selectedValue={commune}
          onValueChange={(itemValue) => setCommune(itemValue)}
        >
          {communes.map((com, index) => (
            <Picker.Item key={index} label={com} value={com} />
          ))}
        </Picker>
        <Text style={styles.imageText}>Choisissez une image :</Text>
        
       <TouchableOpacity  style={styles.imageButton} onPress={handleChooseImage}>
          <Text style={[styles.buttonText, styles.buttonTextRed]}>Choisir une image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageButton} onPress={handleTakePhoto}>
          <Text style={[styles.buttonText, styles.buttonTextRed]}>Prendre une photo</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
         <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}><Link href={"/acceuilAnnonce"}>Annuler</Link></Text>
          </TouchableOpacity>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => {
          setShowSuccessModal(false);
        }}
      >
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
       source={require('../../assets/images/gif.jpeg')} // Assurez-vous de spécifier le chemin correct
        style={styles.gifImage}
      />
            <Text style={styles.modalText}>Annonce ajoutée avec succès</Text>
            <TouchableOpacity onPress={() => setShowSuccessModal(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
   container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  headerImage: {
    width: '100%', // Ajustez la largeur de l'image selon vos besoins
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
    resizeMode: 'cover', // Ajustez le mode de redimensionnement
    marginBottom: 10,
    // Autres styles pour l'image si nécessaire
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000', // Couleur grenat
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  androidPickerStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  fileInputContainer: {
    marginBottom: 10,
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#8B0000', // Couleur grenat
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%', // Ajustement de la largeur pour les boutons
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
   imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  numberInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  
  galleryButton: {
    backgroundColor: '#FFC0CB', // Couleur rose clair pour le bouton de la galerie
    marginRight: 10,
  },
  cameraButton: {
    backgroundColor: '#FFC0CB', // Couleur rose clair pour le bouton de la caméra
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#8B0000', // Contour en couleur grenat
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Largeur étendue à 100%
    marginBottom: 10, // Marge en bas pour séparer les boutons
    marginBottom: 10,
  },
buttonTextRed: {
  fontSize: 16,
  color: '#8B0000'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#8B0000', // Couleur grenat pour le texte
  },
  closeButton: {
    backgroundColor: '#8B0000', // Couleur grenat pour le bouton "Fermer"
    padding: 6,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  imageTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gifImage: {
    width: 100,
    height: 100,
    marginBottom: 20, // Éloignement du texte
  },
});


export default MonFormulaire;