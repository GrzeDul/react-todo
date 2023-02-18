import React, { useState } from 'react';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = ({ columnId, action }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: value }, columnId);
    setValue('');
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default CardForm;
