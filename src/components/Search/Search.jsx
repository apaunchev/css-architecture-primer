import React from "react";

import styles from "./Search.module.css";

export function Search() {
  return (
    <div className={styles.wrapper}>
      <input type="search" placeholder="Search" />
    </div>
  );
}
