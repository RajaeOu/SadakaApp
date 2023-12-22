import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = () => {
  const [readNotifications, setReadNotifications] = useState(new Set());

  const notifications = [
    { id: '1', text: 'Nouveau don reçu de John Doe.' },
    { id: '2', text: 'Votre don a été approuvé.' },
    { id: '3', text: 'Nouvelle mise à jour de lapplication disponible.' },
  ];

  const markAsRead = (notificationId) => {
    const updatedReadNotifications = new Set(readNotifications);
    updatedReadNotifications.add(notificationId);
    setReadNotifications(updatedReadNotifications);
  };

  const isNotificationRead = (notificationId) => {
    return readNotifications.has(notificationId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <Text style={styles.header1}>Vérifiez si vous avez de nouvelles notifications!</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => markAsRead(item.id)}
            style={[
              styles.notificationItem,
              { backgroundColor: isNotificationRead(item.id) ? '#f0f0f0' : 'white' },
            ]}
          >
            <Text>{item.text}</Text>
            {!isNotificationRead(item.id) && (
              <Ionicons name="ios-alert-circle" size={20} color="red" />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:90,
  },
  header1: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 20,
    marginLeft:10,
    color:'#8F2121',
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NotificationsScreen;