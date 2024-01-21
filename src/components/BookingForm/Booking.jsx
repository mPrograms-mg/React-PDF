import React from "react";
import {
  Page,
  Document,
  StyleSheet,
  Image,
  View,
  Text,
  Link,
} from "@react-pdf/renderer";
import logo from "../../assets/SVM-Developers-Logo.png";
import Footer from "./Footer";
import Header from "./Header";
import BookingTitle from "./BookingTitle";
import BookingDate from "./BookingDate";
// import { Link } from "react-router-dom";

export const Booking = () => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      fontFamily: "Helvetica",
      fontSize: 12,
      position: "relative",
      // paddingTop: 30,
      // paddingLeft: 50,
      // paddingRight: 50,
      lineHeight: 1.5,
      flexDirection: "column",
      border: "5px solid black", // Set your desired border style
      boxSizing: "border-box",
    },

    header: {
      width: "100%",
      height: "60px",
      backgroundColor: "#F49614",
      position: "absolute",
      top: 0,
    },

    footer: {
      width: "100%",
      height: "60px",
      backgroundColor: "#F49614",
      position: "absolute",
      bottom: 0,
    },

    companyLogo: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "start",
      gap: "10px",
      margin: "60px 0",
      alignItems: "center",
      borderBottom: "2px solid black",
    },

    logo: {
      width: "150px",
      height: "80px",
    },

    companyName: {
      fontSize: "24px",
      fontWeight: "bold",
    },

    titleWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",

      marginTop: "-50px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "extrabold",
      color: "#F49614",
    },

    passPhotoWrapper: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "0 10px",
      // marginTop: "-50px",
    },

    passPhotoContainer: {
      width: "100px",
      height: "120px",
      border: "1px solid gray",
    },

    date: {
      fontSize: "12px",
    },

    detailTitle: {
      borderBottom: "1px solid gray",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}></View>
        <View style={styles.footer}></View>

        <View style={styles.companyLogo}>
          <View>
            <Image style={styles.logo} src={logo} />
          </View>
          <View>
            <Text style={styles.companyName}>SVM BUILDERS & DEVELOPER</Text>
          </View>
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>BOOKING FORM</Text>
        </View>

        {/* <View></View> */}

        <View style={styles.passPhotoWrapper}>
          <View style={{ width: "60%", display: "flex", gap: "16px" }}>
            <Text style={styles.detailTitle}>
              Project Name :
              <Text style={{ marginLeft: "40px" }}> Sai Resedency</Text>
            </Text>

            <Text style={styles.detailTitle}>
              Client's Name :
              <Text style={{ marginLeft: "40px" }}> Sai Resedency</Text>
            </Text>

            <Text style={styles.detailTitle}>
              Mobile No:
              <Text style={{ marginLeft: "40px" }}> +91 - 1234567890</Text>
            </Text>

            <Text style={styles.detailTitle}>
              Descrition:
              <Text style={{ marginLeft: "40px" }}> Open plot</Text>
            </Text>

            <Text style={styles.detailTitle}>
              House/Shop/Plot:
              <Text style={{ marginLeft: "40px" }}> 12-A </Text>
            </Text>

            <Text style={styles.detailTitle}>
              Area:
              <Text style={{ marginLeft: "40px" }}> 630 Square Feet </Text>
            </Text>

            <Text style={styles.detailTitle}>
              Total Amount:
              <Text style={{ marginLeft: "40px" }}> 251000 /- </Text>
            </Text>

            <Text style={styles.detailTitle}>
              Down Payment:
              <Text style={{ marginLeft: "40px" }}> 21000/- </Text>
            </Text>

            <Text style={styles.detailTitle}>
              EMI:
              <Text style={{ marginLeft: "40px" }}> 3000/- </Text>
            </Text>

            <Text style={styles.detailTitle}>
              Owner's Sign:
              <Text style={{ marginLeft: "40px" }}> Sign </Text>
            </Text>

            <Text style={styles.detailTitle}>
              Customer Sign:
              <Text style={{ marginLeft: "40px" }}> Sign </Text>
            </Text>
          </View>
          <View style={styles.passPhotoContainer}></View>
        </View>

        <View
          style={{
            marginTop: 70,
            paddingTop: 30,
            paddingLeft: 10,
            // paddingRight: 50,
            lineHeight: 1.5,
          }}
        >
          <Text>Follow Us </Text>
          {/* <Link src="www.svmdevelopers.in">SVM Developers</Link> */}
          <Text>www.svmdevelopers.in</Text>
          <Text>SVM Builders & Developers.</Text>
          <Text>https://www.youtube.com/channel/UCQI3M_8lurU33UPVx0p8_7g</Text>
        </View>

        {/* <Header />
        <View style={styles.headingWrapper}>
        </View>
        <BookingTitle />
        <BookingDate date={"01/01/2024"} />
        <Footer /> */}
      </Page>
    </Document>
  );
};

// import React from "react";
// import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
// import logo from "../../assets/SVM-Developers-Logo.png";
// import Footer from "./Footer";
// import Header from "./Header";
// import BookingTitle from "./BookingTitle";
// import BookingDate from "./BookingDate";

// export const Booking = () => {
//   const styles = StyleSheet.create({
//     page: {
//       backgroundColor: "#fff",
//       fontFamily: "Helvetica",
//       fontSize: 12,
//       paddingTop: 30,
//       paddingLeft: 50,
//       paddingRight: 50,
//       lineHeight: 1.5,
//       flexDirection: "column",
//       border: "5px solid black", // Set your desired border style
//       boxSizing: "border-box",
//     },
//     logo: {
//       width: 100,
//       height: 100,
//       position: "absolute",
//       top: 50,
//       right: 30,
//     },
//   });
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <Header />
//         <Image style={styles.logo} src={logo} />
//         <BookingTitle />
//         <BookingDate date={"01/01/2024"} />
//         <Footer />
//       </Page>
//     </Document>
//   );
// };
