import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '../Button';

import {useNavigate} from 'react-router-dom';
import './SearchForm.scss';
// import { useDispatch } from 'react-redux';

const SearchForm = ({ searchMovie }) => {
  const [ query, setQuery ] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(searchMovie(query));
    // navigate(`/search/${query}`);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form d-flex">
      <input 
        onChange={handleChange} 
        value={query}
        type="search" 
        className="form-control"
        aria-label="input"
        placeholder="What do you want to watch?"
      />
      <Button
        type="submit"
      >    
        Search
      </Button>
    </form>
  )
}

SearchForm.propTypes = {
  searchMovie: propTypes.func
}

export default SearchForm;