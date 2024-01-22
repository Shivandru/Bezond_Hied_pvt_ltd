import React from "react";
import styles from "./RightNavbar.module.css";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function RightNavbar() {
  return (
    <div className={styles.rightContainer}>
      <p className={styles.icons}>
        <FaRegHeart className={styles.iconsHeader} />
        Wishlist
      </p>

      <p className={styles.icons}>
        <IoCartOutline className={styles.iconsHeader} />
        Cart
      </p>
      <p className={styles.icons}>
        <FaRegUser className={styles.iconsHeader} />
        Account
      </p>
    </div>
  );
}

export default RightNavbar;
