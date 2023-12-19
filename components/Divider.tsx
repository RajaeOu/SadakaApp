import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Naviguer vers la page souhaitée
    navigation.navigate('DetailScreen');
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.line} />
      <AntDesign name="pluscircleo" size={24} color="#E52B50" />
      <View style={styles.line} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E52B50',
    marginHorizontal: 10,
  },
});

export default AddButton;
