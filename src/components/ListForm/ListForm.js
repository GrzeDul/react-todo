import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import Button from '../Button/Button';
const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleName = 'title';
  const descriptionName = 'description';
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label htmlFor={titleName}>Title:</label>
      <TextInput
        name={titleName}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor={descriptionName}>Icon:</label>
      <TextInput
        name={descriptionName}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
