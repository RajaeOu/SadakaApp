import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Navigator() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/Accueil1">
            <MaterialIcons name="home" size={25} color="#AFABAB" style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/Carte">
            <FontAwesome5 name="map" size={25}  style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/mes_annonces">
            <FontAwesome5 name="bullhorn" size={20}  style={styles.iconst} />
          </Link>
        </Pressable>
        <Pressable style={styles.iconb}>
          <Link href="/(tabs)/MesDemandes">
            <MaterialIcons name="playlist-add" size={25}  style={styles.iconst} />
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FEF5F5 ',
    borderTopWidth: 3,
    borderTopColor: '#AFABAB',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFE7E7',
    height: 40, // Ajustez la hauteur selon vos besoins
  },
  iconb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#2c3e50',
  },
  iconst: {
    color: '#959595',
  },
});


// import React, { useState } from 'react';
// import { View, Pressable, StyleSheet } from 'react-native';
// import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
// import { Link } from 'expo-router';

// export default function Navigator() {
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconPress = (iconName) => {
//     setActiveIcon(iconName);
//   };

//   const isIconActive = (iconName) => activeIcon === iconName;

//   return (
//     <View style={styles.container}>
//       <View style={styles.navbar}>
//           <Pressable
//             style={({ pressed }) => [
//               styles.iconb,
//               { backgroundColor: isIconActive('home') || pressed ? 'red' : 'transparent' },
//             ]}
//             onPress={() => {
//               handleIconPress('home');
//               // Ajoutez ici le code de navigation si nécessaire
//             }}
//           >        <Link href="/(tabs)/Accueil1">

//             <MaterialIcons
//               name="home"
//               size={25}
//               color={isIconActive('home') ? 'red' : '#CDCBCB'}
//               style={styles.iconst}
//             />
//                     </Link>

//           </Pressable>
//         <Link href="/(tabs)/Carte">
//           <Pressable
//             style={({ pressed }) => [
//               styles.iconb,
//               { backgroundColor: isIconActive('map') || pressed ? 'red' : 'transparent' },
//             ]}
//             onPress={() => {
//               handleIconPress('map');
//               // Ajoutez ici le code de navigation si nécessaire
//             }}
//           >
//             <FontAwesome5
//               name="map"
//               size={25}
//               color={isIconActive('map') ? 'red' : '#CDCBCB'}
//               style={styles.iconst}
//             />
//           </Pressable>
//         </Link>
//         <Link href="/(tabs)/mes_annonces">
//           <Pressable
//             style={({ pressed }) => [
//               styles.iconb,
//               { backgroundColor: isIconActive('bullhorn') || pressed ? 'red' : 'transparent' },
//             ]}
//             onPress={() => {
//               handleIconPress('bullhorn');
//               // Ajoutez ici le code de navigation si nécessaire
//             }}
//           >
//             <FontAwesome5
//               name="bullhorn"
//               size={20}
//               color={isIconActive('bullhorn') ? 'red' : '#CDCBCB'}
//               style={styles.iconst}
//             />
//           </Pressable>
//         </Link>
//         <Link href="/(tabs)/mes_demandes">
//           <Pressable
//             style={({ pressed }) => [
//               styles.iconb,
//               { backgroundColor: isIconActive('playlist-add') || pressed ? 'red' : 'transparent' },
//             ]}
//             onPress={() => {
//               handleIconPress('playlist-add');
//               // Ajoutez ici le code de navigation si nécessaire
//             }}
//           >
//             <MaterialIcons
//               name="playlist-add"
//               size={25}
//               color={isIconActive('playlist-add') ? 'red' : '#CDCBCB'}
//               style={styles.iconst}
//             />
//           </Pressable>
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#FFDADA ',
//     borderTopWidth: 3,
//     borderTopColor: '#AFABAB',
//   },
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#FFE7E7',
//     height: 40, // Ajustez la hauteur selon vos besoins
//   },
//   iconb: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRightWidth: 1,
//     borderRightColor: '#2c3e50',
//   },
//   iconst: {
//     color: '#CDCBCB',
//   },
// });