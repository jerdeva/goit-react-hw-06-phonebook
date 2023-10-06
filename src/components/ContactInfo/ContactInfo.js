// import Wrapper from './ContactInfo.styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { BsXCircleFill } from "react-icons/bs";
import { ButtonStyle, ItemsStyled, Paragrapher } from './ContactInfo.styled';




function ContactInfo({ contact }) {
  const dispatch = useDispatch();

  const deliteContacts = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <ItemsStyled>
      <ButtonStyle onClick={deliteContacts}>
        <BsXCircleFill />
      </ButtonStyle>
      <Paragrapher>Name: {contact.name}</Paragrapher>
      <Paragrapher>Number: {contact.number}</Paragrapher>
    </ItemsStyled>
  );
};

export default ContactInfo;
