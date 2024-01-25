
import { NavLink } from 'react-router-dom';

import styles from './mainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">Home page</NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/posts-search">Post search</NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
