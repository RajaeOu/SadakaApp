// import React, { useEffect, useState } from 'react';
// import { View,Pressable,TextInput, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';
// import Navigator from './Navigator';
// import Categories from "../../components/Categories";
// import Divider from '../../components/Divider';
// import {
//   Alert,
//   Text,
//   ScrollView,
//   Image,
// } from "react-native";

// import { Octicons, Ionicons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";



// export default function MapScreen() {
//   const [xCoordinates, setXCoordinates] = useState([]);
//   const [yCoordinates, setYCoordinates] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const handleSearch = () => {
//     // Appeler votre API ici en utilisant Axios pour la requête de recherche
//     axios.get(`http://172.16.32.141:8086/annonces/par-motcle/${searchTerm}`)
//       .then(response => {
//         // Mettre à jour la liste des annonces avec les résultats de la recherche
//         setAnnouncements(response.data);
// console.log(announcements);
//         // ... Autres actions à effectuer après la recherche ...
//       })
//       .catch(error => {
//         console.error('Erreur lors de la recherche :', error);
//       });
//   };
//   useEffect(() => {
//     const fetchXCoordinates = async () => {
//       try {
//         const responseX = await axios.get('http://172.16.32.141:8086/Commune/getX');
//         if (responseX.data && Array.isArray(responseX.data)) {
//           setXCoordinates(responseX.data);
//           console.log('Coordonnées X récupérées avec succès :', responseX.data);
//         }
//       } catch (error) {
//         console.error('Erreur lors de la récupération des coordonnées X:', error);
//       }
//     };

//     const fetchYCoordinates = async () => {
//       try {
//         const responseY = await axios.get('http://172.16.32.141:8086/Commune/getY');
//         if (responseY.data && Array.isArray(responseY.data)) {
//           setYCoordinates(responseY.data);
//           console.log('Coordonnées Y récupérées avec succès :', responseY.data);
//         }
//       } catch (error) {
//         console.error('Erreur lors de la récupération des coordonnées Y:', error);
//       }
//     };

//     // Appel des deux fonctions pour récupérer les données
//     fetchXCoordinates();
//     fetchYCoordinates();
//   }, []);

//   // Génération des marqueurs à partir des coordonnées X et Y
//   const generateMarkersFromCoordinates = () => {
//     const markers = [];
//     for (let i = 0; i < Math.min(xCoordinates.length, yCoordinates.length); i++) {
//       markers.push({
//         title: `Annonce de don : ${i + 1}`,
//         coordinates: {
//           latitude: yCoordinates[i],
//           longitude: xCoordinates[i],
//         },
//       });
//     }
//     return markers;
//   };

//   const markers = generateMarkersFromCoordinates();

//   return (
//     <View style={styles.container}>
//       <Categories />
//       <Divider />



//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 31.7917, // Latitude centrée sur le Maroc
//           longitude: -7.0926, // Longitude centrée sur le Maroc
//           latitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
//           longitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
//         }}
//       >
//         {markers.map((marker, index) => (
//           <Marker
//             key={index}
//             title={marker.title}
//             coordinate={marker.coordinates}
//           />
//         ))}
//       </MapView>
//       <Navigator />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';
import Navigator from './Navigator';
import Categories from "../../components/Categories";
import Divider from '../../components/Divider';
import Sidebar from '../../components/SideBar'; // Import your Sidebar component



export default function MapScreen() {
  const [communeData, setCommuneData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.16.32.141:8086/Commune/affannonce');
        if (response.data && Array.isArray(response.data)) {
          setCommuneData(response.data);
          console.log('Données de commune récupérées avec succès :', response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données de commune :', error);
      }
    };

    // Appel de la fonction pour récupérer les données de commune
    fetchData();
  }, []);

  // Génération des marqueurs à partir des données de commune
  const generateMarkersFromCommuneData = () => {
    return communeData.map((commune, index) => ({
      key: index.toString(),
      title: commune[0], // Nom de la commune
      coordinate: {
        latitude: commune[2], // Coordonnée Y (latitude)
        longitude: commune[1], // Coordonnée X (longitude)
      },
      nbrAnnonce: commune[3], // Nombre d'annonces
    }));
  };

  const markers = generateMarkersFromCommuneData();

  return (
    <View style={styles.container}>
      <Categories />
   <Divider />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.7917, // Latitude centrée sur le Maroc
          longitude: -7.0926, // Longitude centrée sur le Maroc
          latitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
          longitudeDelta: 10, // Valeur arbitraire pour afficher une région étendue du Maroc
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            title={marker.title}
            coordinate={marker.coordinate}
          >
            <Callout>
              <View>
                {/* <Text>{marker.title}</Text> */}
                <Text style={{ color: 'blue' }}>{`Commune : ${marker.title}`}</Text>
<Text style={{ color: 'green' }}>{`Nombre d'annonces : ${marker.nbrAnnonce}`}</Text>

              </View>
            </Callout>
          </Marker>
        ))}
          
      </MapView>
        <Navigator />

    </View>
  );
}

const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
