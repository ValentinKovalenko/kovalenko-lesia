import React from 'react';
import './contacts.css'

const Contact = () => {
    return (
        <div className='contacts-container'>
            <h3>Get in Touch</h3>
            <p>We are here to assist you! Feel free to reach out with any questions or feedback.</p>
            <h3>Email Us:</h3>
            <p>General inquiries and support: <a
                href="mailto:kovalenko.l.v.fop@gmail.com">kovalenko.l.v.fop@gmail.com</a></p>
            <h3>Working Hours:</h3>
            <p>Monday to Friday: 9:00 AM - 6:00 PM (UTC)</p>
        </div>
    );
};

export default Contact;
