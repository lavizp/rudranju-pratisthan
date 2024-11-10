// src/components/InfoCards.tsx
import React from 'react';
import { Link } from 'react-router-dom';
interface CardProps {
    image: string;
    title: string;
    buttonText: string;
    link: string
}

const Card: React.FC<CardProps> = ({ image, title, buttonText, link }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <Link to={link}>
                <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg">
                    {buttonText}
                </button>
            </Link>
        </div>
    </div>
);

const InfoCards: React.FC = () => (
    <section className="flex flex-col md:flex-row gap-4 p-8 bg-gray-100 justify-center mt-10">
        <Card
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nepal_Academy_Building.jpg/640px-Nepal_Academy_Building.jpg"
            title="Images"
            buttonText="View"
            link='/images'
        />
        <Card
            image="https://cdn-icons-png.freepik.com/256/9436/9436150.png?semt=ais_hybrid"
            title="Notices"
            buttonText="View"
            link='/notices'
        />
        <Card
            image="https://images.squarespace-cdn.com/content/v1/6348398d9d21fd6277c64f96/1690311572717-5BBW03AE2BTLF2I4OI45/hackman+team+factors+article.png?format=750w"
            title="Our Members"
            buttonText="View"
            link='/team'
        />
    </section>
);

export default InfoCards;
