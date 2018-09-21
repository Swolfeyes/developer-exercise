import React from 'react';
import styles from './main.scss';


const ItemPrice = ({ currency, price}) => {

  return (
    <div className={styles['itemPrice']}>
      <div className={styles['itemPrice__currency']}>
        <span>{currency}</span>
      </div>
      <div className={styles['itemPrice__value']}>
        <span>{price}</span>
      </div>
    </div>
  )
}

ItemPrice.displayName = 'ItemPrice';

export default ItemPrice;
