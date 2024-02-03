import React, { useState } from "react";

import styles from "./Search.module.css";

export function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    const value = event.target.value;

    setSearchTerm(value);
    onSearch(value);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
