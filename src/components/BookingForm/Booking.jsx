import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../assets/SVM-Developers-Logo.png";
import Footer from "./Footer";
import Header from "./Header";
import BookingTitle from "./BookingTitle";
import BookingDate from "./BookingDate";

export const Booking = () => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      fontFamily: "Helvetica",
      fontSize: 12,
      paddingTop: 30,
      paddingLeft: 50,
      paddingRight: 50,
      lineHeight: 1.5,
      flexDirection: "column",
      border: "5px solid black", // Set your desired border style
      boxSizing: "border-box",
    },
    logo: {
      width: 100,
      height: 100,
      position: "absolute",
      top: 50,
      right: 30,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
        <Image style={styles.logo} src={logo} />
        <BookingTitle />
        <BookingDate date={"01/01/2024"} />
        <Footer />
      </Page>
    </Document>
  );
};
