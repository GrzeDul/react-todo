import React from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = ({ title, icon, cards, addCard, id }) => {
  return (
    <article className={styles.column} key={id}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm action={addCard} columnId={id} />
    </article>
  );
};

export default Column;
