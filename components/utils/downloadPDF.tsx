"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./downloadPDF.module.scss";

const DownloadButton: React.FC = () => {
  const curriculum_route = "/CurriculumAlejandroMolero2024.pdf";

  const downloadFile = (url: string) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download;
    aTag.target = "_blank";
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <button
      onClick={() => {
        downloadFile(curriculum_route);
      }}
      className={styles.downloadButton}
    >
      <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
      <p>Currículum</p>
    </button>
  );
};

export default DownloadButton;
