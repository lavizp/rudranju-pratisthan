import React from 'react';

const Banner: React.FC = () => (
    <div
        className="h-[600px] flex items-center bg-cover bg-center text-white p-10 relative justify-center"
        style={{ backgroundImage: "url('https://abovethehimalaya.com/wp-content/uploads/2021/11/Janaki-temple-nepal.jpg')" }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='text-center'>
            <h1 className="text-7xl font-bold relative z-10">Rudranju Pratisthan</h1>
            <p className='text-4xl relative z-10'>Hamro Rudranju Ramro Rudranju</p>
        </div>
    </div>
);

export default Banner;