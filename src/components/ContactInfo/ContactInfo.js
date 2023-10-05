// import Wrapper from './ContactInfo.styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';




function ContactInfo({ contact }) {
  const dispatch = useDispatch();

  const deliteContacts = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <li>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p>
      <button onClick={deliteContacts}>Delete</button>
    </li>
  );
};

export default ContactInfo;
