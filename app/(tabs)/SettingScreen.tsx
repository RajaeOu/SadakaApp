import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for food, hotels"
        // Additional TextInput props or styles can be added here
      />
      {/* Other settings-related components or content can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // Add other styles for the container if needed
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E52B50',
    borderRadius: 11,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    // Additional styles for the search input can be added here
  },
});

export default SettingScreen;
