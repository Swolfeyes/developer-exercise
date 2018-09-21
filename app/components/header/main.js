import React from 'react';

import styles from './main.scss';


const Header = () => {

  return (
    <div className={styles['header']}>
      <h1>Autumn 2108 - Dresses</h1>
    </div>
  )
}

Header.displayName = 'Header';

export default Header;
