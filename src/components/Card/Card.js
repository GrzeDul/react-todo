import React from 'react';
import styles from './Card.module.scss';

const Card = ({ key, title }) => {
  return (
    <li className={styles.card} key={key}>
      {title}
    </li>
  );
};

export default Card;
