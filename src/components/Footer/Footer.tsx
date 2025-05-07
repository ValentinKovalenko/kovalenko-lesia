import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
           <p className='textFooter'>© 2025 Kovalenko Lesia Ivanivna</p> | <Link className='text' to="/privacy-policy">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
