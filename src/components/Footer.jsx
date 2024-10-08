import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex flex-column">
            <footer className="text-white py-2 mt-auto">
                <p className="text-center m-0 text-white ">
                    &copy; {new Date().getFullYear()} Game Store. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
