import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, Image,Pressable } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View } from './Themed';
import Darkmode from './darkMode';


interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  const translateX = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();
  const toggleDarkMode = () => {
    // Ajoutez ici la logique pour basculer entre le mode sombre et le mode clair
    // Cela peut impliquer le changement de thème, l'utilisation de contexte, etc.
  };

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: showSidebar ? 0 : -300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showSidebar]);

  if (!showSidebar) {
    return null;
  }

  const navigateToSettings = () => {
    toggleSidebar();
    navigation.navigate('Settings');
  };

  const navigateToHelp = () => {
    toggleSidebar();
    navigation.navigate('Liste');
  };

  const navigateToProfile = () => {
    toggleSidebar();
    navigation.navigate('EditProfile');
  };

  const navigateToHome = () => {
    toggleSidebar();
    navigation.navigate('Accueil1');
  };

  return (
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [-300, 0],
                  outputRange: [-300, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.container}
          onPress={toggleSidebar}
        ><View  style={styles.view}
        >
          <Image
            source={require("../assets/vector1.png")}
            style={styles.profileIcon}
          />
          <Text style={styles.userName} >John Doe</Text>
          </View>
          {/* Menu Items */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToHome}
          >
            <AntDesign name="home" size={24} color="#636262" />
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToProfile}
          >
            <FontAwesome name="user" size={24} color="#636262" />
            <Text style={styles.menuItemText}>  Profil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToSettings}
          >
            <AntDesign name="setting" size={24} color="#636262" />
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToHelp}
          >
            <AntDesign name="questioncircle" size={24} color="#636262" />
            <Text style={styles.menuItemText}> Help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToHelp}
          >
            <AntDesign name="logout" size={24} color="#636262" />
            <Text style={styles.menuItemText}> Se Déconnecter</Text>
          </TouchableOpacity>
         
        </TouchableOpacity>

        <Darkmode/>

      </Animated.View>

  );
};

const styles = StyleSheet.create({
    view:{
        backgroundColor:"#800020",
    },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 100,
    position: 'absolute',
    width: 250,
    height:800,



  },
  sidebar: {
    position: 'absolute',
    backgroundColor: '#FFFEFE',

    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    height:100,
    zIndex: 100,
    borderRightWidth: 7,
    borderColor: '#e0e0e0',
  },
  fullScreenTouchable: {
    flex: 1,
    backgroundColor: '#FFFEFE',

  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFEFE',
    paddingTop: 20,
    zIndex: 100,

  },
  profileIcon: {
    width: 80,
    height: 40,
    borderRadius: 40,
    marginBottom: 40,
    top:30,
    left:160,

  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    left:140,
    color:"white",

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    top:40,

  },
  menuItemText: {
    marginLeft: 40,
    fontSize: 16,
    backgroundColor:'white',
  },
});

export default Sidebar;
