import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image,Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker'; 

const categories = ['Séléctiooner une catégorie','Vetements','Chaussures' ,'Nouriture', 'Immeubles','Service','Monais','Médicament', 'Autre']; // Liste des catégories
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState(categories[0]);
  const [province, setProvince] = useState(regions[0]);
  const [commune, setCommune] = useState(communes[0]);
  const [quantite, setQuantite] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = () => {
    // Validation des champs avant l'enregistrement
    if (!titre || !categorie || !province || !commune || !quantite) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setShowSuccessModal(true);
    // Enregistrement des données (à implémenter)
    console.log('Données à enregistrer :', { titre, categorie, province, commune, quantite, description, image });

    // Réinitialisation des champs après l'enregistrement
    setTitre('');
    setCategorie(categories[0]);
    setProvince(regions[0]);
    setCommune(communes[0]);
    setQuantite('');
    setDescription('');
    setImage(null);
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

  

  return (
    <ScrollView style={styles.container}>
       <View style={styles.imageTitleContainer}>
       
        <Text style={styles.title}>Modifier l'annonce</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Titre *"
          value={titre}
          onChangeText={(text) => setTitre(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Quantité *"
          keyboardType="numeric"
          value={quantite}
          onChangeText={(text) => setQuantite(text)}
        />
        
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <Picker
          style={styles.input}
          selectedValue={categorie}
          onValueChange={(itemValue) => setCategorie(itemValue)}
        >
          {categories.map((cat, index) => (
            <Picker.Item key={index} label={cat} value={cat} />
          ))}
        </Picker>
        <Picker
          style={styles.input}
          selectedValue={province}
          onValueChange={(itemValue) => setProvince(itemValue)}
        >
          {regions.map((prov, index) => (
            <Picker.Item key={index} label={prov} value={prov} />
          ))}
        </Picker>
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
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Modifier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Annuler</Text>
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
            <Text style={styles.modalText}>Annonce modifée avec succès</Text>
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


export default MonFormulaire