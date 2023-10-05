import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


export function FormPhonebook() {
 const dispatch = useDispatch();
 const contacts = useSelector(state => state.contacts);

 const [name, setName] = useState('');
 const [number, setNumber] = useState('');

 const handleNameChange = event => {
   setName(event.target.value);
 };

 const handleNumberChange = event => {
   setNumber(event.target.value);
 };

 const handleSubmit = event => {
   event.preventDefault();

   if (name.trim() === '' || number.trim() === '') {
     return;
   }

   const isContactExist = contacts.find(
     contact => contact.name.toLowerCase() === name.toLowerCase()
   );

   if (isContactExist) {
  window.alert(
       'Alert',
       `Contact with name ${name} already exists!`,
       'Ok'
     );
     return;
   }

   const isNumberExist = contacts.find(
     contact => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
   );

   if (isNumberExist) {
window.alert(
       'Alert',
       `Number ${number} is already in contacts!`,
       'Ok'
     );
     return;
   }

   dispatch(addContact(name, number));
   setName('');
   setNumber('');
 };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Name</h2>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
      />
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
      />

      <button type="submit">Add contact</button>
    </form>
  );
}
