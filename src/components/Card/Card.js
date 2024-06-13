'use client';
import React, { useState } from 'react';
import ImageView from '../Images/Image';
import DocumentView from '../Documents/Document';
import NoticeView from '../Notices/Notice';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.png';
const GalleryImage = one;
const DocumentsImage = two;
const NoticesImage = three;

const Card = ({ title, description, images, onClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 my-6" onClick={onClick}>
      <img className="w-full h-48 object-cover object-center" src={images[0]} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="flex items-center text-indigo-500 hover:text-indigo-700 bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white py-2 px-4 rounded">
          Explore
        </button>
      </div>
    </div>
  );
};

const Popup = ({ content, type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 p-4">
      <div className="bg-white p-4 rounded-lg w-full max-w-md">
        {type === 'image' && <ImageView />}
        {type === 'document' && <DocumentView />}
        {type === 'notice' && <NoticeView />}
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [contentType, setContentType] = useState(null);

  const handleCardClick = (content, type) => {
    setPopupContent(content);
    setContentType(type);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
    setContentType(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 shadow-md my-6">
      {popupContent && contentType && <Popup content={popupContent} type={contentType} onClose={handleClosePopup} />}
      <Card
        title="Gallery"
        description="Explore our collection of beautiful images."
        images={[GalleryImage, DocumentsImage, NoticesImage]}
        onClick={() => handleCardClick([GalleryImage, DocumentsImage, NoticesImage], 'image')}
      />
      <Card
        title="Documents"
        description="Access important documents and resources."
        images={[DocumentsImage]}
        onClick={() => handleCardClick(DocumentsImage, 'document')}
      />
      <Card
        title="Notices"
        description="Stay updated with the latest announcements."
        images={[NoticesImage]}
        onClick={() => handleCardClick(NoticesImage, 'notice')}
      />
    </div>
  );
};

export default ParentComponent;
