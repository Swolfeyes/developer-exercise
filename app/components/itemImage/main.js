import React from 'react';
import styles from './main.scss';


const ItemImage = ({ imageUrl }) => {

  return (
    <div className={styles['itemImage']}>
      <img src={imageUrl} />
    </div>
  )
}

ItemImage.displayName = 'ItemImage';

export default ItemImage;
