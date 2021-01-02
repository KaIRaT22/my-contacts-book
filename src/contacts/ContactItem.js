import React from 'react'

function ContactItem({ contact }) {
  const classes = []

  if(contact.favourite === undefined) {
    let favourite = {favourite: false}
    contact = {...contact, ...favourite}
  }
  else if(contact.favourite) {
    classes.push('favourite')
  }

  return (
    <div className="contact__item">
        <img src={contact.image} className="contact__img" alt="img" />
        <div className="contact__subtitle">
            <p className="contact__full-name">{contact.firstName + ' ' + contact.lastName}</p>
            <button></button>
        </div>
    </div>
  )
}

export default ContactItem;