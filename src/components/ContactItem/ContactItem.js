import React from 'react';
import './ContactItem.css';

function ContactItem(
  {contact, onDelete, onEdit}
  ) {

    const onContactDelete = (e) => { 
      e.stopPropagation()

      onDelete(contact.id)
     }



  const onContactEdit = (e) => {
    e.stopPropagation()
    onEdit(contact)
  }
	
		return (
			<div
				className="contact-item"
        onDoubleClick={onContactEdit}
        >
				<p className='content'
          >
          {contact.firstName} {contact.lastName}
        </p>
				<span 
            className='delete-btn'
            onClick={onContactDelete}>
					X
				</span>
			</div>
		);
	}


export default ContactItem;
