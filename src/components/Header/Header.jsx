import React from "react";

import styles from "./Header.module.css";

export function Header({ children }) {
  return <header className={styles.wrapper}>{children}</header>;
}
