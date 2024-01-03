import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const BookingTitle = () => {
  const styles = StyleSheet.create({
    titleContainer: {
      marginTop: 120,
    },
    Title: {
      //   color: "orange"
      letterSpacing: 1,
      fontSize: 20,
      textAlign: "center",

      //   textTransform: "uppercase",
    },
  });
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.Title}>Booking Form</Text>
    </View>
  );
};

export default BookingTitle;
