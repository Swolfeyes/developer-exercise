import React from 'react';
import styles from './main.scss';

import ItemImage from '../itemImage/main.js';
import ItemDetails from '../itemDetails/main.js';
import ItemTitle from '../itemTitle/main.js';
import ItemPrice from '../itemPrice/main.js';
import ItemLink from '../itemLink/main.js';


const ItemCard = ({ link, imageUrl, title, currency, price }) => {

  return (
    <div className={styles['itemCard']}>
      <ItemLink link={link} target='_blank'>
        <div className={styles['itemCard__image']}>
          <ItemImage
            imageUrl={imageUrl}
          />
        </div>
        <div className={styles['itemCard__details']}>
          <ItemDetails>
            <ItemTitle
              title={title}
            />
            <ItemPrice
              currency={currency}
              price={price}
            />
          </ItemDetails>
        </div>
      </ItemLink>
    </div>
  )
}

ItemCard.displayName = 'ItemCard';

export default ItemCard;
