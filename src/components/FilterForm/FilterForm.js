import React from 'react';
import Wrapper from './FormList.styled';
import LabelSt from './FormList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/store';



export function FilterForm ()  {
  const dispatch = useDispatch();

     const searchContact = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <Wrapper>
      <LabelSt htmlFor="filter">
        Find contacts by name
        <input
          name="filter"
          type="text"
          placeholder="Enter name"
          value={useSelector(getFilter)}
          onChange={searchContact}
          disabled={useSelector(getContacts).length === 0} 
        />
      </LabelSt>
    </Wrapper>
  );
};