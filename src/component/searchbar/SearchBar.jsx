import React from "react";
import styles from "./SearchBar.module.css";
import MenuDropDown from "../../component/menu/MenuDropDown";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <MenuDropDown />
      <input className={styles.input} type="text" placeholder="search" />
      <p className={styles.searchIcon}>
        <CiSearch />
      </p>
    </div>
  );
}

export default SearchBar;
