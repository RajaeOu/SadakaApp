import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import Liste from "../../components/Liste";
import Divider from '../../components/Divider';
import Navigator from "../../components/Navigator";
import Sidebar from "../../components/SideBar";

export default function TabTwoScreen() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <TextInput style={{ flex: 1, fontSize: 16 }} placeholder="Search for food, hotels" />
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
            onPress={toggleSidebar} // Call toggleSidebar when pressed
          >
            <Text>S</Text>
          </Pressable>
        </View>

        <Carousel />
        <Categories />
        <Divider />
        <Liste />
      </ScrollView>

      <Sidebar showSidebar={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollView: {
    backgroundColor: "#f8f8f8",
  },
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchContainer: {
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
  },
});
