import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex flex-column min-vh-100">

            <footer className="bg-dark text-white py-4 mt-auto">
                <p className="text-center m-0">
                    &copy; {new Date().getFullYear()} Game Store. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
