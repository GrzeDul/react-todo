import React, { useState } from 'react';
import { changeSearchString } from '../../redux/store';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');

  const handleSearchForm = (e) => {
    e.preventDefault();
    dispatch(changeSearchString(searchString));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSearchForm}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
