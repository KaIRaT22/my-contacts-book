import React from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <ContactItem
            contact={contact}
            key={contact.id}
          />
        )
      })}
    </ul>
  )
}

export default ContactList;