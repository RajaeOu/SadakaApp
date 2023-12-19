import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  const translateX = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();

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
    navigation.navigate('SettingScreen');
  };

  const navigateToHelp = () => {
    toggleSidebar();
    navigation.navigate('SettingScreen');
  };

  const navigateToProfile = () => {
    toggleSidebar();
    navigation.navigate('SettingScreen');
  };

  const navigateToHome = () => {
    toggleSidebar();
    navigation.navigate('SettingScreen');
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
      <TouchableOpacity style={styles.sidebarContent} onPress={toggleSidebar}>
        {/* Profile Icon */}
        <Image
          source={{ uri: 'URL_TO_YOUR_PROFILE_IMAGE' }}
          style={styles.profileIcon}
        />

        {/* User Name */}
        <Text style={styles.userName}>John Doe</Text>

        {/* Menu Items */}
        <TouchableOpacity style={styles.menuItem} onPress={navigateToHome}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={navigateToProfile}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.menuItemText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={navigateToSettings}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={navigateToHelp}>
          <AntDesign name="questioncircle" size={24} color="black" />
          <Text style={styles.menuItemText}>Help</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    backgroundColor: '#ffffff',
    zIndex: 2,
    opacity: 1,
    borderRightWidth: 1,
    borderColor: '#e0e0e0',
  },
  sidebarContent: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    paddingTop: 40, // Adjust top padding for better spacing
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default Sidebar;
