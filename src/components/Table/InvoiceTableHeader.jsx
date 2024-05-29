import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  srno: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  date: {
    width: "35%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  status: {
    width: "20%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.srno}>Sr No</Text>
    <Text style={styles.date}>Date</Text>
    <Text style={styles.amount}>Amount</Text>
    <Text style={styles.status}>Status</Text>
  </View>
);

export default InvoiceTableHeader;
