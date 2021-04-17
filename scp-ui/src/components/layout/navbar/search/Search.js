import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const [designation, setDesignation] = useState('');

  const handleChange = event => {
    setDesignation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(designation);
  };

  return (
    <form className='navbar__search-container' onSubmit={handleSubmit}>
      <TextField
        label='Search'
        className='navbar__search'
        placeholder='Search objects...'
        variant='outlined'
        onChange={handleChange}
      ></TextField>
      <IconButton type='submit' disabled={designation.length < 3 ? true : false}>
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Search;
