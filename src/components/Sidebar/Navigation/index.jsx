import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { BiStats } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import styles from './Navigation.module.css'; // Modül CSS

const Navigation = () => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <TiHome className={styles.Icon} />
            <p className={styles.NavTitle}>Home</p>
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <BiStats className={styles.Icon} />
            <p className={styles.NavTitle}>Statistics</p>
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink
            to="/currency"
            className={({ isActive }) => (isActive ? styles.ActiveLink : '')}
          >
            <FaDollarSign className={styles.Icon} />
            
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;