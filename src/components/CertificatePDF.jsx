import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Tspan,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  // tables
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

const CertificatePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>My PDF Document</Text>
          <Tspan>soy un t span</Tspan>
          <Text style={styles.subtitle}>Otro texto</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
            amet felis non lacus euismod iaculis. Nulla consequat orci sed justo
            vehicula vestibulum.
          </Text>
          <Text style={styles.text}>
            Phasellus sed nisl maximus, convallis urna quis, sollicitudin nisi.
            Duis nec dolor eget risus tristique tristique. Proin at rutrum
            lectus.
          </Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Type</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Period</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Price</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>React-PDF</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>3 User </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>5€</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CertificatePDF;
