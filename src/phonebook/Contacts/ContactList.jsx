import React from 'react';
import s from './ContactStyles.module.css';

function ContactList ({ contacts, deleteContact }) {
        return (
            <>
                <ul className={s.contactsList}>
                    {contacts.map(contact => (
                        <li
                            key={contact.id}
                            className={s.contactsListItem}
                        > {contact.name}: {contact.number}

                            <span
                                onClick={() => deleteContact(contact.id)}
                                className={s.delBtn}
                            >-</span>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

export default ContactList;