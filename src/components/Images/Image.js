import React, { useState, useEffect } from 'react';
import { storage } from '../../firebaseConfig';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const ImageView = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        fetchFiles('images', setImages);
    }, []);

    const fetchFiles = async (folder, setter) => {
        const storageRef = ref(storage, folder);
        const fileList = await listAll(storageRef);
        const filesData = await Promise.all(fileList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { name: item.name, url };
        }));
        setter(filesData);
    };

    const openImage = (index) => {
        setCurrentIndex(index);
    };

    const closeImage = () => {
        setCurrentIndex(null);
    };

    const showPreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex !== null && prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const renderFiles = (files) => {
        return files.map((file, index) => (
            <div key={index} className="flex flex-col items-center border border-gray-300 p-2 rounded-lg">
                <div onClick={() => openImage(index)} className="flex flex-col items-center cursor-pointer">
                    <img src={file.url} alt={`Image ${index}`} className="h-32 w-32 mb-2 object-cover rounded-md" />
                </div>
            </div>
        ));
    };

    return (
        <div className="max-w-full mx-auto p-4">
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-black">Images</h2>
                <div className="grid-container overflow-auto max-h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {renderFiles(images)}
                </div>
            </div>
            {currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button onClick={closeImage} className="absolute top-4 right-4 text-white text-2xl">X</button>
                    <button onClick={showPreviousImage} className="absolute left-4 text-white text-2xl">{"<"}</button>
                    <img src={images[currentIndex].url} alt={`Image ${currentIndex}`} className="max-h-3/4 max-w-3/4 object-contain" />
                    <button onClick={showNextImage} className="absolute right-4 text-white text-2xl">{">"}</button>
                </div>
            )}
        </div>
    );
};

export default ImageView;
