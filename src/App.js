import { useState } from 'react';
import ContactForm from './phonebook/Contacts/ContactForm';
import ContactList from './phonebook/Contacts/ContactList';
import Filter from './phonebook/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import useLocalStorage from './hooks/useLocalStorage';

function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  
  
  const handleSubmit = (name, number) => {
    const availableContact = contacts.find(contact =>  contact.name === name)
    const newContact = { id: uuidv4(), name: name, number: number }

    if (availableContact) {
      return alert(`${name} is already in contacts.`);
    }

    return setContacts([newContact, ...contacts])
  }


  const handleFilterChange = e => {
    const { value } = e.currentTarget;

    setFilter(value);
  }

  const filterContactsList = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const deleteNameFromList = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
        
    return setContacts(newContacts)
  }

  
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm
          onSubmit={handleSubmit} />
        
        <h2 className={s.title}>Contacts</h2>

        <Filter
          onChange={handleFilterChange}
          value={filter}
        />
        
        <ContactList
          deleteContact={deleteNameFromList}
          contacts={filterContactsList()}
        />
      </>
    )
  };

export default App;
