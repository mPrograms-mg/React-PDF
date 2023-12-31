/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import PdfDocument from "./components/GenerateInvoice/Invoice";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="App">
      <PDFViewer width={800} height={600} showToolbar={true}>
        <PdfDocument />
      </PDFViewer>
      <div className="download-link">
        <PDFDownloadLink document={<PdfDocument />} fileName="SVM.pdf">
          {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default App;
