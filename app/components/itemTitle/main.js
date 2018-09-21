import React from 'react';
import styles from './main.scss';

const ItemTitle = ({ title }) => {

  return (
    <div className={styles['itemTitle']}>
      <span>{title}</span>
    </div>
  )
}

ItemTitle.displayName = 'ItemTitle';

export default ItemTitle;
