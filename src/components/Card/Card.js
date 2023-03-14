import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ key, title, isFavorite, id }) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite({ id }));
  };
  console.log(isFavorite);
  return (
    <li className={styles.card} key={key}>
      {title}
      <button onClick={handleFavoriteClick}>
        <i className={clsx('fa fa-star-o', isFavorite && styles.favorite)}></i>
      </button>
    </li>
  );
};

export default Card;
