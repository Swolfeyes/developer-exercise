import React from 'react';

import data from '../../../data/recommendations.json';

import Header from '../header/main.js';
import ItemCard from '../itemCard/main.js';

import styles from './main.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataResponse: data.hits,
    }
  }

  buildCards() {

    const { dataResponse } = this.state;

    return dataResponse.map((item, index) => {
      if(!item.image) {
        return;
      } else {
        return <ItemCard
          key={item.product_id}
          imageUrl={item.image.link}
          currency={item.currency}
          price={item.price}
          link={item.link}
          title={item.image.title}
        />
      }
    });
  }

  render() {
    const { dataResponse } = this.state;

    return (
      <div className={styles['app']}>
        <div className={styles['app__header']}>
          <Header />
        </div>
        <div className={styles['app__cards']}>
          {this.buildCards()}
        </div>
      </div>
    )
  }
}


export default App;

App.displayName = 'App';
