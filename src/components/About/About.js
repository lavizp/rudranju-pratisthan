import React from 'react';
import image from './about.jpg'
import { useNavigate } from 'react-router-dom';
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 m-6 shadow-2xl" style={{ backgroundColor: '#F5F4F5', borderRadius:"10px" }}>
      <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-10">
        <img src={image} alt="Placeholder" className="h-80 w-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left text-gray-900">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem tempora deleniti, doloremque excepturi omnis dolor dolores similique atque dolore ipsa incidunt veniam sint iure provident at quisquam aperiam cupiditate? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, consectetur placeat! Commodi praesentium, maxime autem mollitia saepe quaerat error pariatur eveniet unde quis labore aspernatur impedit facilis provident ducimus fuga.
        </p>
      </div>
    </div>
  );
}

export default About;
