import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearchForm = (e) => {
    e.preventDefault();
    dispatch({ type: 'CHANGE_SEARCHQUERY', payload: query });
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSearchForm}>
      <TextInput
        placeholder='Search...'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
