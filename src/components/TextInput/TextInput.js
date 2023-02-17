import React from 'react';
import styles from './TextInput.module.scss';

const Input = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      type='text'
    />
  );
};

export default Input;
