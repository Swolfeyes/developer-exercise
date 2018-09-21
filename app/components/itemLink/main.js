import React from 'react';

import styles from './main.scss';


const ItemLink = ({ children, link }) => {
  return (
    <div className={styles['itemLink']}>
      <a href={link} target='_blank'>
        {children}
      </a>
    </div>
  )
}

export default ItemLink;
