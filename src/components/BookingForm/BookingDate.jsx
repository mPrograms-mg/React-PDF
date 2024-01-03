import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const BookingDate = ({ date }) => {
  const styles = StyleSheet.create({
    titleContainer: {
      //   marginTop: 150,
    },
    Date: {
      //   color: "orange"
      letterSpacing: 1,
      fontSize: 10,
      textAlign: "right",
      fontWeight: "extrabold",
      //   textTransform: "uppercase",
    },
  });
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.Date}>DATE:{date}</Text>
    </View>
  );
};

export default BookingDate;
