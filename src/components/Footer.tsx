import React from 'react';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => (
    <footer className="bg-blue-500 text-white p-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500"
            >
                <FaFacebookF />
                Facebook
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-white hover:text-green-500">
                <FaPhoneAlt />
                +1 (234) 567-890
            </a>
        </div>
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
);

export default Footer;
