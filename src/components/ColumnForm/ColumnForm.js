import React, { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss';
const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const titleName = 'title';
  const iconName = 'icon';

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title, icon });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label htmlFor={titleName}>Title:</label>
      <TextInput
        name={titleName}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor={iconName}>Icon:</label>
      <TextInput
        name={iconName}
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
