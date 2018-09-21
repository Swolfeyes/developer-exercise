import React from 'react';
import styles from './main.scss';

const ItemDetails = ({ children }) => {

  return (
    <div className={styles['itemDetails']}>
      {children}
    </div>
  )
}

ItemDetails.displayName = 'ItemDetails';

export default ItemDetails;
