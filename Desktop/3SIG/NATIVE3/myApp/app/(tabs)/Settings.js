import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Navigator from './Navigator';


const Settings = () => {
  const navigation = useNavigation();

  const naviguerVersModifierProfil = () => {
    navigation.navigate("EditProfile");
  };


  const naviguerVersNotifications = () => {
    navigation.navigate("NotificationsScreen");
  };

  const naviguerVersSupport = () => {
    navigation.navigate("Helpsupport");
  };

  const naviguerVersConditionsPolitiques = () => {
    navigation.navigate("ConditionsPolitiquesScreen");
  };

  const naviguerVersSauvegardeDate = () => {
    console.log("Fonction de sauvegarde de date");
  };

  const naviguerVersSignalerProbleme = () => {
    navigation.navigate("ReportProblemScreen");
  };

  const deconnexion = () => {
    Alert.alert(
      "Confirmer la déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("login");
          },
        },
      ]
    );
  };

  const elementsCompte = [
    {
      icon: "person-outline",
      text: "Modifier le Profil",
      action: naviguerVersModifierProfil,
    },
    {
      icon: "notifications-none",
      text: "Notifications",
      action: naviguerVersNotifications,
    },
    { icon: "help-outline", text: "Aide & Support", action: naviguerVersSupport },
    {
      icon: "info-outline",
      text: "Conditions et Politiques",
      action: naviguerVersConditionsPolitiques,
    },
  ];

  const elementsCacheCellulaire = [
    { icon: "save-alt", text: "Enregistré", action: naviguerVersSauvegardeDate },
  ];

  const elementsActions = [
    {
      icon: "outlined-flag",
      text: "Signaler un problème",
      action: naviguerVersSignalerProbleme,
    },
    { icon: "logout", text: "Déconnexion", action: deconnexion },
  ];

  const h3 = { fontSize: 18, fontWeight: "bold" }; // Définissez votre style h3
  const h4 = { fontSize: 16, fontWeight: "bold" }; // Définissez votre style h4
  const semiBold = { fontWeight: "500" }; // Définissez votre style semiBold

  const renderElementParametres = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingLeft: 12,
        backgroundColor: "white",
      }}
    >
      <MaterialIcons name={icon} size={24} color="#800020" />
      <Text
        style={{
          marginLeft: 36,
          semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Accueil1')}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color="#800020"
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: '#800020' }}>Paramètres</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Paramètres de compte */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...h4, marginVertical: 10 }}>Compte</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#FFC0CB",
            }}
          >
            {elementsCompte.map((element, index) => (
              <React.Fragment key={index}>
                {renderElementParametres(element)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Paramètres de support et À propos */}

        

        {/* Cache & Cellulaire */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...h4, marginVertical: 10 }}>
            Cache & Cellulaire{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#FFC0CB",
            }}
          >
            {elementsCacheCellulaire.map((element, index) => (
              <React.Fragment key={index}>
                {renderElementParametres(element)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Paramètres d'actions */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...h4, marginVertical: 10 }}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#FFC0CB",
            }}
          >
            {elementsActions.map((element, index) => (
              <React.Fragment key={index}>
                {renderElementParametres(element)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    <Navigator />
    </SafeAreaView>
  );
};

export default Settings;