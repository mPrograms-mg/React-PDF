// import { Link } from "react-router-dom";

// const DemoApp = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//       }}
//     >
//       <Link to={"/"}>
//         <h2>Demo App</h2>
//       </Link>
//       <Link to={"pdf"}>
//         <h2>Demo PDF</h2>
//       </Link>
//     </div>
//   );
// };

// export default DemoApp;

// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFDownloadLink,
//   PDFViewer,
//   // BlobProvider,
// } from "@react-pdf/renderer";

// import { MyDoc } from "./components/MyDoc";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#0000",
//   },
//   section: {
//     margin: 20,
//     padding: 0,
//     flexGrow: 1,
//   },
// });

// const MyDoc = () => (
//   <Document>
//     <Page size="A4" style={styles.page} width={500}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// const App = () => {
//   // const width = "100%"; // Use any valid CSS width value
//   // const height = "650px";
//   return (
//     <div
//       style={{
//         width: "100%",
//       }}
//     >
//       <PDFViewer
//         style={{
//           margin: "0 auto",
//           display: "flex",
//           width: "70%",
//           height: "99.2vh",
//         }}
//         // width={800}
//         // height={500}
//         showToolbar={true}
//       >
//         <MyDoc />
//       </PDFViewer>

//       <BlobProvider document={MyDoc}>
//         {({ url }) => (
//           <a href={url} target="_blank" rel="noreferrer">
//             Open in new tab
//           </a>
//         )}
//       </BlobProvider>

//       <PDFDownloadLink document={<MyDoc />} fileName="myInvoice.pdf">
//           {({ loading }) =>
//             loading ? <button>Loading...</button> : <button>Download</button>
//           }
//         </PDFDownloadLink>
//     </div>
//   );
// };

// export default App;
