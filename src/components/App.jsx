// import {  useEffect, useState } from "react";
import { FormPhonebook } from './FormPhonebook/FormPhonebook'
// import { nanoid } from 'nanoid';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactsList } from './ContactsList/ContactsList'
import React from 'react';


// const localStInitialContacts = () => {
//         const savedContacts = localStorage.getItem('saved-contacts');
//     if (savedContacts !== null) {
//       return  JSON.parse(savedContacts)
//     }
//     return []
// }


export const App = () => {    
    
    return (
      <div>
        <FormPhonebook/>
        <FilterForm/>
        <ContactsList/>
      </div>
    );
  
};
