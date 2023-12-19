import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
// import Liste from "../../components/Liste";
import Divider from '../../components/Divider';


export default function TabTwoScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={{ marginHorizontal: 10 ,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
      flex: 1,}}>
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: "#F5F5F5",
      borderRadius: 11,
      borderColor: "#E52B50",
      borderWidth: 2,
      flex: 1,
    }}
  >
    <TextInput
      style={{ flex: 1, fontSize: 16 }}
      placeholder="Search for food, hotels"
    />
    <AntDesign name="search1" size={24} color="#E52B50" />
  </View>
  <Pressable
    style={{
      marginLeft: 10,
      backgroundColor: "#6CB4EE",
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>S</Text>
  </Pressable>
</View>


      <Carousel />
      <Categories />
      <Divider />
      {/* <Liste /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    marginBottom: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});