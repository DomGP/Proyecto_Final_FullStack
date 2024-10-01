import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
                <p>&copy; {new Date().getFullYear()} Game Store. All rights reserved.</p>        
        </footer>
    );
};

export default Footer;
