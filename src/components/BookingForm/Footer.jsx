import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const Footer = () => {
  const styles = StyleSheet.create({
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 50, // Set your desired height
      backgroundColor: "orange", // Set your desired background color
      justifyContent: "center",
      alignItems: "center",
    },
    footerText: {
      color: "white", // Set your desired text color
    },
  });
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}></Text>
    </View>
  );
};

export default Footer;
