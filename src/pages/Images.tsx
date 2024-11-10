import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Image = {
    id: number;
    src: string;
    alt: string;
};

const images: Image[] = [
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGb-MC4ACLgS1gWqq1c5eb-z4v5bTPQuj8A&s', alt: 'Image 1' },
];

const Image: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openImage = (image: Image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar />
            <div className='h-screen'>
                <div className='mt-10'>
                    <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Explore Our Image Gallery</h1>
                    <p className="text-lg mb-8 text-gray-700 text-center">Click on any image below to view it in full size!</p>
                </div>
                <div className="flex flex-wrap gap-4 p-4">
                    {images.map((image) => (
                        <div key={image.id} className="cursor-pointer">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-48 h-48 object-cover rounded-md"
                                onClick={() => openImage(image)}
                            />
                        </div>
                    ))}

                    {isOpen && selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="relative bg-white p-4 rounded-md">
                                <button
                                    className="absolute top-0 right-0 p-2 text-white bg-gray-500 rounded-full"
                                    onClick={closeImage}
                                >
                                    X
                                </button>
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[80vh] object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Image;
