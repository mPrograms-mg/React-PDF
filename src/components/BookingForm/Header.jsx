import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const Header = () => {
  const styles = StyleSheet.create({
    header: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 50,
      backgroundColor: "orange",
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      color: "white",
    },
  });
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}></Text>
    </View>
  );
};

export default Header;
