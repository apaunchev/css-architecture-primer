import React from "react";

import styles from "./Footer.module.css";

export function Footer({ children }) {
  return (
    <footer className={styles.wrapper}>
      <div className="container text-center">{children}</div>
    </footer>
  );
}
