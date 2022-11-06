import  ContactForm  from "../ContactForm/ContactForm"
import {ContactList} from "../ContactList/ContactList"
import Filter from "../filter/Filter"
import scss from "./Contacts.module.scss"

export default function Contacts() {

  return (
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
      <h2 className={scss.titlePhoneBook}>PhoneBook</h2>
        <ContactForm />
      </div>
      <div className={scss.contacts}>
      <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
    )
};