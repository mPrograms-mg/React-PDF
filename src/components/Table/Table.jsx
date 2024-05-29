/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../assets/logo.png";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceItemsTable from "./InvoiceItemsTable";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
  },

  logo: {
    width: 84,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PdfTable = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <InvoiceTitle title={"SVM Developer"} />
        <InvoiceItemsTable />
      </Page>
    </Document>
  );
};

export default PdfTable;
