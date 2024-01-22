import React, { useContext } from "react";
import styles from "./Header.module.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { MenuContext } from "../../context/MenuContext";
import DropDown from "../../component/dropdown/DropDown";
import RightNavbar from "../../component/rightnavbar/RightNavbar";
import CompanyLogo from "../../component/companylogo/CompanyLogo";
import SearchBar from "../../component/searchbar/SearchBar";

function Header() {
  const { menu, setMenu } = useContext(MenuContext);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.sectionContainer}>
      <CompanyLogo />
      <SearchBar />
      <RightNavbar />
      {menu ? (
        <IoClose onClick={handleMenu} className={styles.close}></IoClose>
      ) : (
        <IoMenu onClick={handleMenu} className={styles.menu}></IoMenu>
      )}
      {menu && <DropDown />}
    </div>
  );
}

export default Header;
