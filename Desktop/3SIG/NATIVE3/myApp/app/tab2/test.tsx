// // import React, { useState } from 'react';
// // import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

// // // Assuming you have a type or interface for your data
// // interface Donation {
// //   id: string;
// //   name: string;
// //   // other properties...
// // }

// // const YourComponent = () => {
// //   const data: Donation[] = [
// //     { id: '1', name: 'Donation 1' },
// //     { id: '2', name: 'Donation 2' },
// //     // other items...
// //   ];

// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [filteredData, setFilteredData] = useState<Donation[]>(data);
// //   const [isSearchVisible, setIsSearchVisible] = useState(false);

// //   const handleSearchIconClick = () => {
// //     setIsSearchVisible(!isSearchVisible);
// //   };

// //   const handleSearch = () => {
// //     const filtered = data.filter((item) =>
// //       item.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     setFilteredData(filtered);
// //   };

// //   const renderItem: ({ item }: { item: Donation }) => JSX.Element = ({ item }) => (
// //     <View>
// //       <Text>{item.name}</Text>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={handleSearchIconClick}>
// //         {/* Your search icon here */}
// //         <Text>🔍</Text>
// //       </TouchableOpacity>

// //       {isSearchVisible && (
// //         <View>
// //           <TextInput
// //             style={styles.searchInput}
// //             placeholder="Type here to search"
// //             onChangeText={(text) => setSearchQuery(text)}
// //             onBlur={handleSearch}
// //           />
// //         </View>
// //       )}

// //       <FlatList
// //         data={filteredData}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   searchInput: {
// //     borderWidth: 0.5,
// //     borderColor: '#f8f8f8',
// //     padding: 5,
// //     margin: 5,
// //     marginLeft: 1,
// //     marginRight: 3,
// //     width: 200,
// //   },
// // });

// // export default YourComponent;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';

// const YourComponent = () => {
//   const [annonces, setAnnonces] = useState([]);
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     // Effectuer la requête GET lorsque le composant est monté
//     fetch('http://localhost:3000/annonces') // Assurez-vous d'utiliser le bon chemin d'accès à votre endpoint
//       .then(response => response.json())
//       .then(data => {
//         setAnnonces(data);
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des annonces :', error);
//       });
//   }, []);

//   const handleSearchIconClick = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };

//   const renderAnnonce = ({ item }) => (
//     <View style={styles.annonceContainer}>
//       <View style={[styles.clock, styles.clockPosition]}>
//         <Image
//           style={[styles.listIcon, styles.text2Position]}
//           contentFit="cover"
//           source={require("../../assets/images/Clock.png")}
//         />
//       </View>
//       <Text style={[styles.category, styles.dateTypo]}>{item.categorie}</Text>

//       <Image
//         style={[styles.donAssociation800x50911Icon, styles.donIconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/appelDon.png")}
//       />
//       <View style={styles.appelDon1Wrapper}>
//         <Text style={[styles.appelDon1, styles.dateTypo]}>{item.appelDon}</Text>
//       </View>

//       {/* Ajoutez d'autres composants pour chaque annonce ici */}
//     </View>
//   );

//   return (
//     <View style={styles.iphone13145}>
//       <View style={[styles.iphone13145Child, styles.mainRoundMediumShadowBox]} />
  
//       {/* ... (other code) */}
  
//       <Image
//         style={[styles.iconUser, styles.iconLayout2]}
//         resizeMode="cover"  // Corrected property
//         source={require("../../assets/images/icon-user.png")}
//       />
  
//       {/* ... (other code) */}
  
//       <Image
//         style={[styles.iconHome2, styles.iconLayout1]}
//         resizeMode="cover"  // Corrected property
//         source={require("../../assets/images/Vector.png")}
//       />
  
//       {/* ... (other code) */}
  
//       <View>
//         {annonces.map((annonce, index) => (
//           <View key={index} style={styles.annonceContainer}>
//             <View style={[styles.clock, styles.clockPosition]}>
//               <Image
//                 style={[styles.listIcon, styles.text2Position]}
//                 resizeMode="cover"  // Corrected property
//                 source={require("../../assets/images/Clock.png")}
//               />
//             </View>
//             <Text style={[styles.category, styles.dateTypo]}>{annonce.categorie}</Text>
  
//             {/* ... (other code) */}
  
//             <Image
//               style={[styles.donAssociation800x50911Icon, styles.donIconLayout]}
//               resizeMode="cover"  // Corrected property
//               source={require("../../assets/images/appelDon.png")}
//             />
//             <View style={styles.appelDon1Wrapper}>
//               <Text style={[styles.appelDon1, styles.dateTypo]}>{annonce.appelDon}</Text>
//             </View>
  
//             {/* ... (other code) */}
  
//             <Image
//               style={[styles.mappinlineIcon, styles.datePosition]}
//               resizeMode="cover"  // Corrected property
//               source={require("../../assets/images/mappinline.png")}
//             />
//             <Text style={[styles.commune, styles.dateTypo]}>{annonce.commune}</Text>
  
//             {/* ... (other code) */}
  
//             <Image
//               style={[styles.handIcon, styles.iconLayout]}
//               resizeMode="cover"  // Corrected property
//               source={require("../../assets/images/hand.png")}
//             />
//             <Text style={[styles.quantity, styles.dateTypo]}>{annonce.quantite}</Text>
  
//             {/* ... (other code) */}
  
//             <Image
//               style={[styles.calendarblankIcon, styles.clockPosition]}
//               resizeMode="cover"  // Corrected property
//               source={require("../../assets/images/calendarblank.png")}
//             />
//             <Text style={[styles.date, styles.datePosition]}>{annonce.date}</Text>
  
//             {/* ... (other code) */}
  
//             <View style={[styles.rectangleParent, styles.groupItemLayout]}>
//               <View style={[styles.groupItem, styles.groupItemLayout]} />
//               <Text style={[styles.text2, styles.text2Position]}>+</Text>
//             </View>
  
//             {/* ... (other code) */}
  
//             <Text style={[styles.description, styles.dateTypo]}>{annonce.description}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
  