import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

import React from "react";
import CertificatePDF from "../components/certificate/CertificatePDF";

const Certificates = () => {
  return (
    <div>
      <PDFViewer width="100%" height="700px">
        <CertificatePDF></CertificatePDF>
      </PDFViewer>
      <PDFDownloadLink document={<CertificatePDF />} fileName="my_document.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Certificates;
