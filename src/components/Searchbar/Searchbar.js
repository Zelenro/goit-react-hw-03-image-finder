import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { HiSearch } from 'react-icons/hi';

import {
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchFormWrapper,
  SearchWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchFormWrapper onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <HiSearch
              style={{
                width: 40,
                height: 40,
                cursor: 'pointer',
              }}
            />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchFormWrapper>
      <Toaster />
    </SearchWrapper>
  );
};
