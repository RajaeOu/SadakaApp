import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';

import { Octicons, Ionicons } from "@expo/vector-icons";
import {  AntDesign, MaterialIcons } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import Liste from "../../components/Liste";
import Divider from '../../components/Divider';
import Sidebar from '../../components/SideBar'; // Import your Sidebar component



import Navigator from './Navigator';
import axios from "axios";

export default function TabTwoScreen() {
  const [announcements, setAnnouncements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allAnnouncements, setAllAnnouncements] = useState([]);

 
  const handleSearch = (searchTerm) => {
    // Appeler votre API ici en utilisant Axios pour la requête de recherche
    axios.get(`http://172.16.32.141:8086/annonces/par-motcle/${searchTerm}`)
      .then(response => {
        const newAnnouncements = response.data;
  
        // if (searchTerm.trim() === '') {
        //   // Si le champ de recherche est vide, réinitialiser la liste des annonces avec toutes les annonces
        //   setAllAnnouncements(response.data);
        //   console.log("pas de liste");
        // }  
        if (newAnnouncements.length === 0) {
          // Aucune annonce trouvée, afficher une alerte
          setAnnouncements([]);
          Alert.alert(
            'Aucune annonce',
            'Il n\'y a plus d\'annonces à afficher.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false, textStyle: { color: 'red' } }
          );
        } else {
          // Mettre à jour la liste des annonces avec les résultats de la recherche
          setAnnouncements(newAnnouncements);
          console.log(announcements);
          console.log("hh");
          // ... Autres actions à effectuer après la recherche ...
        }
      })
      .catch(error => {
        console.error('Erreur lors de la recherche :', error);
      });
  };
  


  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get("http://172.16.32.141:8086/annonces/all_annonces")
      .then((response) => {
        setAnnouncements(response.data);
        setAllAnnouncements(response.data);

        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  
  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
        <View style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          flex: 1,
        }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 12,
              backgroundColor: "#F5F5F5",
              borderRadius: 11,
              borderColor: "#E52B50",
              borderWidth: 2,
              flex: 1,
            }}
          >
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              placeholder="Rechercher"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
            <Pressable
              style={{ padding: 10 }}
              onPress={() => handleSearch(searchTerm)} // Appel avec searchTerm comme paramètre
            >
              <AntDesign name="search1" size={24} color="#E52B50" />
            </Pressable>
          </View>
          <AntDesign name="filter" size={24} color="#E52B50" />

          <Pressable
            style={{
              marginLeft: 10,
              backgroundColor: "#6CB4EE",
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={toggleSidebar}

          >
            <Text>S</Text>

          </Pressable>
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

        </View>

        <Carousel />
        <Categories />
        
        <Divider />
        <Pressable
              style={styles.sortButton}
              onPress={() => console.log('Sort button pressed')}
            >
          <MaterialIcons name="filter-list" size={24} color="#800000" />
            </Pressable>
        <Liste data={announcements} />
     
      </ScrollView>

      <View style={styles.navigatorContainer}>
        <Navigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sortButton: {
    borderRadius: 4, // Bord arrondi
    paddingHorizontal: 3, // Espacement horizontal interne
    paddingVertical: 1, // Espacement vertical interne
    marginLeft: 350, // Marge à gauche pour l'espacement
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});



// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Pressable,
//   TextInput,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import Carousel from "../../components/Carousel";
// import Categories from "../../components/Categories";
// import Liste from "../../components/Liste";
// import Divider from '../../components/Divider';
// import Navigator from "./Navigator";

// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <View style={styles.header}>
//           <View style={styles.searchContainer}>
//             <TextInput
//               style={{ flex: 1, fontSize: 16 }}
//               placeholder="Search for food, hotels"
//             />
//             <AntDesign name="search1" size={24} color="#E52B50" />
//           </View>

//           <Pressable
//             style={{
//               marginLeft: 10,
//               backgroundColor: "#6CB4EE",
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Text>S</Text>
//           </Pressable>
//         </View>
//         <Carousel />
//         <Categories /> 
//        <Divider />
//         <Liste />
//        </ScrollView>
//        <Navigator/>

//      </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   scrollView: {
//     backgroundColor: "#f8f8f8",
//   },
//   header: {
//     marginHorizontal: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "#F5F5F5",
//     borderRadius: 11,
//     borderColor: "#E52B50",
//     borderWidth: 2,
//     flex: 1,
//   },
// });