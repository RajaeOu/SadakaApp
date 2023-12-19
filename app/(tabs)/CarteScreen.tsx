import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const carte = () => {
  const communeMarkers = [
    { id: 1, nom: 'Commune 1', latitude: 32.0000, longitude: -7.0000 },
    { id: 2, nom: 'Commune 2', latitude: 33.0000, longitude: -6.5000 },
    { id: 3, nom: 'Commune 3', latitude: 31.5000, longitude: -6.0000 },
    // Ajoutez plus de marqueurs selon vos besoins
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.0000,
          longitude: -6.0000,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {communeMarkers.map(commune => (
          <Marker
            key={commune.id}
            coordinate={{
              latitude: commune.latitude,
              longitude: commune.longitude,
            }}
            title={commune.nom}
          >
            <Callout>
              <View>
                <Text style={styles.calloutTitle}>{commune.nom}</Text>
                <Text>Informations sur les annonces</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutTitle: {
    fontWeight: 'bold',
  },
});

export default carte;
