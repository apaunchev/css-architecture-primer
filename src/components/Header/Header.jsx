import React from "react";

import styles from "./Header.module.css";

export function Header({ children }) {
  return (
    <header className={styles.wrapper}>
      <div className="wrapper space-between">{children}</div>
    </header>
  );
}
