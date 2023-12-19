import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { Link } from 'expo-router';


const IPhone13144 = () => {
  return (
    <View style={styles.iphone13144}>
      <View style={styles.objects} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/frame.png")}
      />
      {/* <Link href={"/tab2/modifierProfil"}><View style={styles.container3}>
        <Image
        source={require('../../assets/images/fleche.png')}
        style={styles.image2}
        />
      </View></Link> */}
      <Image
        style={[styles.objectsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/objects.png")}
      />
           <Text style={[styles.myProfil, styles.helpFlexBox]}><Link href={"/tab2/modifierProfil"}>My Profil</Link>
</Text>

      <Text style={[styles.help, styles.helpFlexBox]}>Help</Text>
      <Text style={[styles.settings, styles.helpFlexBox]}>Settings</Text>
      <Text style={[styles.logout, styles.helpFlexBox]}>LogOut</Text>
      <View style={styles.download1Wrapper}>
        <Image
          style={styles.download1Icon}
          contentFit="cover"
          source={require("../../assets/vector1.png")}
        />
      </View>
      <Text style={[styles.jhonLook, styles.helpFlexBox]}>Jhon Look</Text>
      <Image
        style={[styles.iconUser, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/-icon-user1.png")}
      />
      <Image
        style={[styles.iconQuestionMarkCircle, styles.iconPosition]}
        contentFit="cover"
        source={require("../../assets/-icon-question-mark-circle.png")}
      />
      <Image
        style={[styles.iconLogOut, styles.iconPosition]}
        contentFit="cover"
        source={require("../../assets/-icon-log-out.png")}
      />
      <Image
        style={[styles.iconSettings, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/-icon-settings.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  helpFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  logoutTypo: {
    left: 88,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.kantumruy,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconPosition: {
    left: "7.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  objects: {
    top: -30,
    left: -10,
    width: 415,
    height: 498,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "31.04%",
    width: "106.41%",
    top: "0%",
    right: "-6.41%",
    bottom: "68.96%",
    left: "0%",
  },
  objectsIcon: {
    height: "9.94%",
    width: "27.64%",
    top: "6.33%",
    right: "74.1%",
    bottom: "86.73%",
    left: "3%",
  },
  myProfil: {
    top: 338,
    left: 90,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.kantumruy,
    fontSize: FontSize.ctionButtonMedium_size,
    textAlign: "center",
  },
  help: {
    top: 520,
    left: 89,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.kantumruy,
    fontSize: FontSize.ctionButtonMedium_size,
    textAlign: "center",
  },
  settings: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.kantumruy,
    fontSize: FontSize.ctionButtonMedium_size,
    textAlign: "center",  
    left: 89,
    top: 429,
  },
  logout: {
    top: 610,
     color: Color.colorDarkslategray,
    fontFamily: FontFamily.kantumruy,
    fontSize: FontSize.ctionButtonMedium_size,
    textAlign: "center",  
    left: 89,
    
  },
  download1Icon: {
    top: 0,
    left: 0,
    width: 93,
    height: 140,
    position: "absolute",
  },
  download1Wrapper: {
    top: 112,
    left: 262,
    borderRadius: 45,
    width: 128,
    height: 86,
    position: "absolute",
    overflow: "hidden",
  },
  jhonLook: {
    top: 190,
    left: 20,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.josefinSansMedium,
    color: "#080002",
    width: 126,
    height: 23,
  },
  iconUser: {
    height: "3.09%",
    width: "5.95%",
    top: "44.97%",
    right: "84.36%",
    bottom: "59.48%",
    left: "7.18%",
  },
  iconQuestionMarkCircle: {
    height: "3.09%",
    width: "5.95%",
    top: "68.9%",
    right: "84.62%",
    bottom: "38.97%",
  },
  iconLogOut: {
    height: "3.9%",
    width: "5.8%",
    top: "80.42%",
    right: "85.13%",
    bottom: "28.73%",
  },
  iconSettings: {
    height: "3.09%",
    width: "5.95%",
    top: "56.69%",
    right: "84.74%",
    bottom: "48.93%",
    left: "7.56%",
  },
  iphone13144: {
    backgroundColor: Color.neutralWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13144;
