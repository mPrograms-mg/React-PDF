/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfTable from "./components/Table/Table";

const App = () => {
  return (
    <div className="App">
      <PDFViewer width={800} height={690} showToolbar={true}>
        <PdfTable />
      </PDFViewer>
      <div className="download-link">
        <PDFDownloadLink document={<PdfTable />} fileName="SVM.pdf">
          {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default App;
