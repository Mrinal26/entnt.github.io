import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../components/Navbar.module.css";
import erp from "../assets/erp.jpg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/" className={styles.logoLink}>
        <img src={erp} alt="Logo" />
      </Link>
      <p>Enterprise Resource Planning</p>
      <div>
        <Menu>
          <MenuButton className={styles.MenuButton}>Open menu</MenuButton>
          <MenuList className={styles.MenuList}>
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/products">Products</MenuItem>
            <MenuItem as={Link} to="/orders">Orders</MenuItem>
            <MenuItem as={Link} to="/calendar-view">Calendar View</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
