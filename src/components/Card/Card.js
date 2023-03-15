import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ key, title, isFavorite, id }) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };
  const handleDeleteClick = () => {
    dispatch(deleteCard(id));
  };
  return (
    <li className={styles.card} key={key}>
      {title}
      <div className={styles.buttons}>
        <button onClick={handleFavoriteClick}>
          <i
            className={clsx('fa fa-star-o', isFavorite && styles.favorite)}
          ></i>
        </button>
        <button onClick={handleDeleteClick}>
          <i className='fa fa-trash'></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
