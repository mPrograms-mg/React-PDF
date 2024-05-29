import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  srno: {
    width: "15%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  date: {
    width: "35%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingRight: 8,
  },
  amount: {
    width: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingRight: 8,
  },
  status: {
    width: "20%",
    textAlign: "center",
    paddingRight: 8,
  },
});

const InvoiceTableRow = () => {
  return (
    <Fragment>
      {
        <View style={styles.row}>
          <Text style={styles.srno}>1</Text>
          <Text style={styles.date}>30/2/2024</Text>
          <Text style={styles.amount}>23</Text>
          <Text style={styles.status}>complete</Text>
        </View>
      }
    </Fragment>
  );
  // const rows = items.map((data) => (
  //   <View style={styles.row} key={data.srno.toString()}>
  //     <Text style={styles.srno}>{data.srno}</Text>
  //     <Text style={styles.date}>{data.date}</Text>
  //     <Text style={styles.amount}>{data.amount}</Text>
  //     <Text style={styles.status}>{data.status}</Text>
  //   </View>
  // ));
  // return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
