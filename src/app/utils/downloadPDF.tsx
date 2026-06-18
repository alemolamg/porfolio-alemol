import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./downloadPDF.module.scss";

const DownloadButton: React.FC = () => {
  const curriculum_route = "/Curriculum_Alejandro_Molero_Gomez 2025.pdf";

  return (
    <a
      className={styles.downloadButton}
      href={curriculum_route}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
      <span>Descargar CV</span>
    </a>
  );
};

export default DownloadButton;
