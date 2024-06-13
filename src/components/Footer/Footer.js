import React from 'react';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
         <div className="col-span- md:col-span-2 flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            We are a dedicated team committed to providing the best services and
            experiences to our clients. Our mission is to deliver high-quality
            products and ensure customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">Gallery</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">Notices</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">Documents</a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <address className="text-lg mb-2">
            123 Main Street<br />
            Anytown, AN 12345
          </address>
          <div className="flex items-center mb-2">
            <PhoneIcon className="w-6 h-6 mr-3 text-yellow-400" />
            <span className="text-lg">+123 456 7890</span>
          </div>
          <div className="flex items-center">
            <MailIcon className="w-6 h-6 mr-3 text-yellow-400" />
            <span className="text-lg">info@example.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
