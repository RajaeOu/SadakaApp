import React from 'react';
 import AnnonceListItem from './annonce'; // Assurez-vous de spécifier le chemin correct
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
 import { Link } from 'expo-router';

import { View,FlatList,ScrollView,Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Navigator from './Navigator';
import Navbar from '../../components/navbar';


const IPhone13145 = () => {
  const annonces = [
    // Liste d'annonces (exemple)
    {
      categorie: "vétements",
            quantite: 10,
            prix: 499.99,
            description: "dons",
            appelDon: "Mon Premier don",
            commune: "Xasablanca",
            date: "2023-11-18",
            id: 4,
    },
    {
      categorie: "vétements",
      quantite: 10,
      prix: 499.99,
      description: "dons",
      appelDon: "Mon Premier don",
      commune: "Xasablanca",
      date: "2023-11-18",
      id: 4,
    },
    {
      categorie: "vétements",
            quantite: 10,
            prix: 499.99,
            description: "dons",
            appelDon: "Mon Premier don",
            commune: "Xasablanca",
            date: "2023-11-18",
            id: 4,
    },
    // Ajoutez d'autres annonces au besoin
  ];
  return (
    <View style={styles.container}>
       <Navbar/>
        {/* Image en dessous de la barre de navigation */}
        <Image
            source={require("../../assets/images/supportdonations.png")}
       style={styles.backgroundImage}
        resizeMode="cover"
      />
       {/* <Link href={"/page4"}></Link><Text style={[styles.button, styles.textTypo]}>{`Filterer `}</Text>
       <Text style={[styles.trier, styles.textTypo]}>
          <Link href={"/page4"}><Text style={styles.trier1}> Trier</Text></Link>
          <Text style={styles.text}>{`  `}</Text>
        </Text>
         <Text style={[styles.text1, styles.text1Layout]}><Link href={"/tab2/formulaireAnnonce"}>Créer Annonce</Link></Text> */}

       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Link href={"/formulaireAnnonce"}><Text style={styles.buttonText}>Bouton 1</Text></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bouton 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bouton 3</Text>
        </TouchableOpacity>
      </View>

      <View>

  {/* View for group child shadow box */}
   <View style={styles.groupChildShadowBox} /> 

  {/* Mapping through annonces array */}
  {annonces.map((annonce, index) => (
    <View key={index} style={{ marginTop: index > 0 ? 80 : 0 }}>
      <View style={[styles.clock, styles.clockPosition]}>
        <Image
          style={[styles.listIcon, styles.text2Position]}
          resizeMode="cover"
          source={require("../../assets/images/Clock.png")}
        />
      </View>
      <Text style={[styles.category, styles.dateTypo]}>{annonce.categorie}</Text>
      <Image
        style={[styles.donAssociation800x50911Icon, styles.donIconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/appelDon.png")}
      />
      <View style={styles.appelDon1Wrapper}>
        <Text style={[styles.appelDon1, styles.dateTypo]}>{annonce.appelDon}</Text>
      </View>
      <Image
        style={[styles.mappinlineIcon, styles.datePosition]}
        resizeMode="cover"
        source={require("../../assets/images/mappinline.png")}
      />
      <Text style={[styles.commune, styles.dateTypo]}>{annonce.commune}</Text>
      <View style={[styles.currencydollar, styles.iconLayout]} />
      <Image
        style={[styles.handIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/hand.png")}
      />
      <Text style={[styles.quantity, styles.dateTypo]}>{annonce.quantite}</Text>
      <Image
        style={[styles.calendarblankIcon1, styles.clockPosition]}
        resizeMode="cover"
        source={require("../../assets/images/calendarblank.png")}
      />
      <Text style={[styles.date, styles.datePosition]}>{annonce.date}</Text>

      <TouchableOpacity >
        <Image
          style={[styles.calendarblankIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../../assets/images/plus.png')}
        />
      </TouchableOpacity>
    </View>
  ))}

    </View>


      <Navigator />

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    top:150,
    margin: 10, // Marge autour du conteneur principal
  },
  annonceContainer: {
    marginBottom: 10, // Marge entre chaque annonce
  },
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'dark',
    // Ajoutez d'autres styles selon vos besoins
  },
  backgroundImage: {
    width: '100%',
    height: 120,
    position: 'absolute',
    top: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E1A0A0',
    marginTop: 120, // Adjusted marginTop to reduce the space between the image and buttons
  },
  button: {
    backgroundColor: '#800020',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'normal',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    fontSize: 18,
    color: 'darkred',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'darkred',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   marginTop: 15,
  // },
  closeButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  validateButton: {
    backgroundColor: 'darkred',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  gifImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Couleur de fond du footer
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Bordure supérieure du footer
  },
  mainRoundMediumShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  searchInput: {
    borderWidth: 0.5,
    borderColor: '#f8f8f8',
    padding: 5,
    margin: 5,
    marginLeft: 1,
    marginRight: 3,
    flex: 1,
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  filtererPosition: {
    left: 44,
    position: "absolute",
  },
  iconLayout1: {
    width: 21,
    height: 21,
  },
  fileCloudDownloadLayout: {
    display: "none",
    height: 16,
    width: 16,
  },
  rectangleViewLayout: {
    top: 246,
    height: 29,
    width: 108,
    backgroundColor: Color.colorBrown_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
    marginTop: 0.2,
  },
  textTypo: {
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
  },
  text1Layout: {
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupIconPosition: {
    left: "1.54%",
    right: "-30.26%",
    width: "200.72%",
    height: "1.61%",
    position: "absolute",
  },
  iconPosition: {
    top: "0%",
    position: "absolute",
  },
  clockPosition: {
    top: 48,
    position: "absolute",
  },
  text2Position: {
    top: 0,
    position: "absolute",
  },
  dateTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
  },
  donIconLayout: {
    height: 59,
    width: 60,
    top: 27,
    position: "absolute",
  },
  datePosition: {
    top: 47,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  groupItemLayout: {
    width: 23,
    position: "absolute",
  },
  iphone13145Child: {
    top: 770,
    left: 14,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    width: 362,
    height: 61,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  iconNotification: {
    height: 30,
    width: 27,
  },
  iconSearchNormal1: {
    width: 27,
    height: 27,
    marginLeft: 200,
    Top: 40,
  },
  iconNotificationParent: {
    top: 40,
    left: 150,
    // flexDirection: "row",
    position: "absolute",
  },
  iconUser: {
    height: "3.44%",
    width: "6.72%",
    top: "3.73%",
    right: "5.72%",
    bottom: "92.83%",
    left: "35.56%",
    position: "absolute",
  },
  iconHome2: {
    height: 21,
  },
  iconMap: {
    width: 37,
    height: 31,
    marginLeft: 72,
  },
  vectorIcon: {
    marginLeft: 72,
    height: 21,
  },
  iconNote: {
    width: 22,
    marginLeft: 72,
    height: 21,
  },
  iconHome2Parent: {
    top: 789,
    flexDirection: "row",
  },
  iconMenu: {
    height: 20,
    width: 18,
    top: 3,
    right: "86.95%",
    bottom: "100.77%",
    left: "90%",
    position: "absolute",
  },
  supportDonationsWelfareCharIcon: {
    top: 81,
    width: 390,
    height: 149,
    left: 0,
    position: "absolute",
  },
  mediumButton: {
    fontSize: FontSize.actionButtonMedium_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.actionButtonMedium,
    marginLeft: 8,
    textAlign: "left",
    color: Color.neutralWhite,
  },
  navigationArrowForward: {
    marginLeft: 8,
  },
  elements: {
    alignItems: "center",
    flexDirection: "row",
  },
  mainMedium: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorBrown_200,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
  },
  mainRoundMedium: {
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowRadius: 7,
    elevation: 7,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  roundPrimaryFullButton: {
    top: 337,
    right: -122,
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  iphone13145Item: {
    top: 245,
    left: 11,
    height: 29,
    width: 108,
    backgroundColor: Color.colorBrown_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13145Inner: {
    left: 143,
  },
  rectangleView: {
    left: 270,
    marginTop: 0.2,
  },
  filterer: {
    top: 253,
    fontSize: 15,
    lineHeight: 18,
    width: 86,
    height: 12,
    color: 'dark',
    left: 44,
    position: "absolute",
    fontFamily: FontFamily.dMSansRegular,

    
  },
  trier1: {
    fontSize: FontSize.size_2xs,
  },
  text: {
    fontSize: FontSize.size_4xs,
  },
  trier: {
    top: 253,
    left: 179,
    width: 72,
    height: 12,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: 15,


    color: 'dark',
    position: "absolute",
  },
  text1: {
    top: 252,
    left: 290,
    width: 90,
    height: 13,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
    color: 'dark',
    fontSize: 15,
    backgroundColor:'dark',

  },
  iconSearch: {
    height: "27.55%",
    width: "7.37%",
    right: "85.06%",
    bottom: "72.45%",
    left: "7.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildShadowBox: {
    height: 1000,
    width: 400,
    backgroundColor: Color.colorLavenderblush,
    borderRadius: Border.br_9xs,
    marginTop: 10,
    left: 0,
    shadowOpacity: 1,
    elevation: 50,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  listIcon: {
    width: 13,
    height: 13,
    left: 0,
  },
  clock: {
    left: 152,
    width: 10,
    height: 11,
  },
  category: {
    left: 166,
    lineHeight: 14,
    color: Color.colorGray_200,
    fontSize: FontSize.size_4xs,
    top: 48,
    position: "absolute",
  },
  donAssociation800x50911Icon: {
    left: 6,
  },
  appelDon1: {
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorGray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  appelDon1Wrapper: {
    top: 25,
    left: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mappinlineIcon: {
    left: 77,
    height: 16,
    width: 16,
  },
  commune: {
    left: 91,
    lineHeight: 14,
    color: Color.colorGray_200,
    fontSize: FontSize.size_4xs,
    top: 48,
    position: "absolute",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center', // Appliquez vos styles d'alignement ici
  },
  currencydollar: {
    top: 70,
    left: 85,
    position: "absolute",
  },
  handIcon: {
    top: 44,
    left: 221,
    position: "absolute",
  },
  quantity: {
    left: 238,
    lineHeight: 14,
    color: Color.colorGray_200,
    fontSize: FontSize.size_4xs,
    top: 48,
    position: "absolute",
  },
  calendarblankIcon: {
    left: 370,
    height: 20,
    width: 20,
  },
  calendarblankIcon1: {
    left: 280,
    height: 16,
    width: 16,
  },
  date: {
    left: 303,
    color: Color.colorGray_200,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
  },
  groupItem: {
    top: 9,
    backgroundColor: Color.colorFirebrick,
    left: 0,
    height: 20,
  },
  text2: {
    left: 4,
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    color: Color.colorSnow,
    width: 11,
    height: 7,
    fontFamily: FontFamily.dMSansRegular,
    textAlign: "left",
  },
  rectangleParent: {
    top: 42,
    left: 346,
    height: 29,
  },
  description: {
    top: 72,
    left: 79,
    width: 423,
    height: 10,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  iconSearchParent: {
    top: "10.05%",

    bottom: "14.34%",
  },
  donAssociation800x50911Icon1: {
    left: 8,
  },
  iconSearchContainer: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    top: "0%",
  },
  iconSearchGroup: {
    top: "49.64%",
    bottom: "38.74%",
  },
  groupView: {
    top: "36.97%",
    bottom: "51.42%",
  },
  iconSearchParent2: {
    top: "61.85%",
    bottom: "26.54%",
  },
  iphone13145: {
    backgroundColor: Color.neutralWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
// Define your styles here

});

export default IPhone13145;

