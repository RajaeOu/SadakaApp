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
    bottom: 4, // Au sommet de l'écran
    width: 400,
    height:400,
    
  },
  image1: {
    position: 'absolute', // Position absolue
    bottom: 4, // Au sommet de l'écran
    width: "5.75%",
    height: 5,
    left:180,
    
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
    marginBottom:0,
    position:'absolute',
    
  },
  text1: {
   // fontFamily: 'Inter-Regular', // Assurez-vous d'ajouter la police dans votre projet
    fontWeight: 'normal',
    fontSize: 16,
    color: '#9ca5bb',
    textAlign: 'center',
    lineHeight: 19, // Ajustez la valeur en fonction de vos besoins
    marginBottom:20,
    alignItems: 'center',

  },
  text2: {
    //fontFamily: 'Inter-Regular', // Assurez-vous d'ajouter la police dans votre projet
    fontWeight: 'normal',
    fontSize: 20,
    color: '#9ca5bb',
    textAlign: 'center',
    lineHeight: 19, // Ajustez la valeur en fonction de vos besoins
    marginBottom:0.2,
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
          source={require('../../assets/images/imGroupe.png')} // Assurez-vous que l'image est correctement située
        />
    
        <Text style={styles.text}>Let’s Help
        {"\n"}
        Each Others</Text>
       
      </View>
      <View style={styles.container1}>
      <Text style={styles.text1}>
        When we give cheerfully and accept {"\n"} 
        gratefully, everyone is blessed
      </Text>
      <Image
          style={styles.image1}
          source={require('../../assets/images/tir.png')} // Assurez-vous que l'image est correctement située
        />
       <Link href={"/page2"}><View style={styles.container3}>
        <Image
        source={require('../../assets/images/fleche.png')}
        style={styles.image2}
        />
      </View></Link>
      <Link href={"/formulaireAnnonce"}><Text style={styles.text2}>Skip..</Text></Link>

    </View>
    </View>
  );
};

export default Box;


// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, View, Text } from "react-native";
// import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";
//  import { Link } from 'expo-router';

// const IPhone13142 = () => {
//   return (
//     <View style={styles.iphone13142}>
//       <Image
//         style={styles.iphone13142Child}
//         contentFit="cover"
//         source={require("../../assets/images/rectangle-4159.png")}
//       />
//       <View style={styles.rectangleParent}>
//         <Image
//           style={[styles.groupChild, styles.groupChildLayout1]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4160.png")}
//         />
//         <Image
//           style={[styles.groupItem, styles.groupLayout]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4161.png")}
//         />
//         <Image
//           style={[styles.groupInner, styles.groupInnerPosition]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4163.png")}
//         />
//         <Image
//           style={[styles.rectangleIcon, styles.groupInnerPosition]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4164.png")}
//         />
//         <Image
//           style={[styles.groupChild1, styles.groupChildLayout1]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4165.png")}
//         />
//         <Image
//           style={[styles.groupChild2, styles.groupLayout]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4166.png")}
//         />
//         <Image
//           style={[styles.groupChild3, styles.groupChildLayout]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4162.png")}
//         />
//         <Image
//           style={[styles.groupChild4, styles.groupChildLayout]}
//           contentFit="cover"
//           source={require("../../assets/images/rectangle-4159.png")}
//         />
//       </View>
//       <Text style={styles.letsHelpEach}>{`Let’s Help
// Each Others`}</Text>
//       <Text
//         style={[styles.whenWeGive, styles.skipTypo]}
//       >{`When we give cheerfully and accept 
// grateully, everyone is blessed`}</Text>
     
//       <View style={[styles.iphone13142Inner, styles.iphone13142Position]} />
//       <Image
//         style={styles.ellipseIcon}
//         contentFit="cover"
//         source={require("../../assets/images/Ecllipse_5.png")}
//       />
//       <Image
//         style={styles.iphone13142Child1}
//         contentFit="cover"
//         source={require("../../assets/images/Ecllipse_6.png")}
//       />
//       <Image
//         style={[styles.droit1Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/droit1.png")}
//       />
//       <Image
//         style={[styles.droit3Icon, styles.iconLayout]}
//         contentFit="cover"
//         source={require("../../assets/images/droit2.png")}
//       />
//       <Image
//         style={styles.droit2Icon}
//         contentFit="cover"
//         source={require("../../assets/images/droit3.png")}
//       />
//       <Text style={[styles.skip, styles.skipTypo]}> <Link href={"/page4"}>Skip</Link></Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groupChildLayout1: {
//     width: 92,
//     borderRadius: Border.br_base,
//     left: 216,
//     height: 164,
//     position: "absolute",
//   },
//   groupLayout: {
//     left: 110,
//     height: 164,
//     width: 92,
//     borderRadius: Border.br_base,
//     position: "absolute",
//   },
//   groupInnerPosition: {
//     left: 326,
//     width: 92,
//     borderRadius: Border.br_base,
//     position: "absolute",
//   },
//   groupChildLayout: {
//     left: 14,
//     height: 164,
//     width: 92,
//     borderRadius: Border.br_base,
//     position: "absolute",
//   },
//   skipTypo: {
//     fontFamily: "interRegular",
//     position: "absolute",
//   },
//   iphone13142Position: {
//     height: 5,
//     top: 667,
//     position: "absolute",
//   },
//   iconLayout: {
//     height: 53,
//     width: 53,
//     position: "absolute",
//   },
//   iphone13142Child: {
//     left: 0,
//     width: 390,
//     display: "none",
//     top: 0,
//     position: "absolute",
//     height: 844,
//   },
//   groupChild: {
//     top: 25,
//     height: 164,
//   },
//   groupItem: {
//     top: 0,
//   },
//   groupInner: {
//     top: 16,
//     height: 164,
//   },
//   rectangleIcon: {
//     top: 194,
//     height: 165,
//   },
//   groupChild1: {
//     top: 204,
//     height: 164,
//   },
//   groupChild2: {
//     top: 179,
//   },
//   groupChild3: {
//     top: 24,
//   },
//   groupChild4: {
//     top: 203,
//   },
//   rectangleParent: {
//     top: 73,
//     left: -14,
//     width: 418,
//     height: 368,
//     position: "absolute",
//   },
//   letsHelpEach: {
//     top: 472,
//     left: 73,
//     fontSize: 40,
//     fontWeight: "700",
//     fontFamily: "interBold",
//     color: "#1a2441",
//     textAlign: "center",
//     position: "absolute",
//   },
//   whenWeGive: {
//     top: 599,
//     left: 56,
//     fontSize: FontSize.actionButtonMedium_size,
//     color: "#9ca5bb",
//     textAlign: "center",
//   },
//   iphone13142Item: {
//     left: 206,
//     width: 5,
//   },
//   iphone13142Inner: {
//     left: 180,
//     borderRadius: Border.br_3xs,
//     backgroundColor: "#800020",
//     width: 23,
//   },
//   ellipseIcon: {
//     top: 703,
//     left: 148,
//     width: 79,
//     height: 79,
//     position: "absolute",
//   },
//   iphone13142Child1: {
//     top: 711,
//     left: 156,
//     width: 64,
//     height: 64,
//     position: "absolute",
//   },
//   droit1Icon: {
//     top: 721,
//     left: 165,
//   },
//   droit3Icon: {
//     top: 789,
//     left: 75,
//   },
//   droit2Icon: {
//     top: 794,
//     left: 64,
//     width: 30,
//     height: 43,
//     position: "absolute",
//   },
//   skip: {
//     top: 802,
//     left: 17,
//     fontSize: 20,
//     color: "rgba(89, 86, 86, 0.75)",
//     textAlign: "left",
//     width: 73,
//     height: 38,
//   },
//   iphone13142: {
//     backgroundColor: Color.neutralWhite,
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     height: 844,
//   },
// });

// export default IPhone13142;
