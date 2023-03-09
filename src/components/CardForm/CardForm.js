import React, { useState } from 'react';
import styles from './CardForm.module.scss';
import { addCard } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default CardForm;
