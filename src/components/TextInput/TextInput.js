import React from 'react';
import styles from './TextInput.module.scss';

const Input = ({ placeholder = '', value, onChange, name = '' }) => {
  return (
    <input
      name={name}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type='text'
    />
  );
};

export default Input;
