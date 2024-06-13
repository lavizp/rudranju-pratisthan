'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../firebaseConfig';
import { ref, listAll, getDownloadURL, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { DocumentTextIcon, PhotographIcon } from '@heroicons/react/outline';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [images, setImages] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetchFiles('images', setImages);
        fetchFiles('documents', setDocuments);
        fetchFiles('notices', setNotices);
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

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setUploadedFileName(e.target.files[0].name);
        }
    };

    const handleUpload = (folder) => {
        if (file) {
            const storageRef = ref(storage, `${folder}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done `);
                },
                error => {
                    console.error(error.message);
                },
                () => {
                    console.log("Upload completed");
                    fetchFiles(folder, (files) => {
                        switch (folder) {
                            case 'images':
                                setImages(files);
                                break;
                            case 'documents':
                                setDocuments(files);
                                break;
                            case 'notices':
                                setNotices(files);
                                break;
                            default:
                                break;
                        }
                    });
                }
            );
        }
    };

    const handleRemove = async (fileName, folder) => {
        const storageRef = ref(storage, `${folder}/${fileName}`);
        await deleteObject(storageRef);
        fetchFiles(folder, (files) => {
            switch (folder) {
                case 'images':
                    setImages(files);
                    break;
                case 'documents':
                    setDocuments(files);
                    break;
                case 'notices':
                    setNotices(files);
                    break;
                default:
                    break;
            }
        });
    };

    const renderFiles = (files, folder) => {
        return files.map((file, index) => (
            <div key={index} className="my-2 flex items-center">
                {folder === 'images' ? (
                    <>
                        <img src={file.url} alt={`Image ${index}`} className="h-8 w-8 mr-2" />
                        <PhotographIcon className="h-6 w-6 mr-2 text-gray-600" />
                    </>
                ) : (
                    <DocumentTextIcon className="h-6 w-6 mr-2 text-gray-600" />
                )}
                <span style={{color:"black"}}>{file.name}</span>
                <button onClick={() => handleRemove(file.name, folder)} className="ml-2 text-red-500">Remove</button>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-black">Upload Documents</h2>
                <div className="flex items-center">
                    <input type="file" onChange={handleChange} className="mr-2 bg-white rounded-md shadow-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <span className="text-black font-medium">{uploadedFileName}</span>
                </div>
                <button onClick={() => handleUpload('documents')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">Upload</button>
                <div>{renderFiles(documents, 'documents')}</div>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-black">Upload Images</h2>
                <div className="flex items-center">
                    <input type="file" onChange={handleChange} className="mr-2 bg-white rounded-md shadow-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <span className="text-black font-medium">{uploadedFileName}</span>
                </div>
                <button onClick={() => handleUpload('images')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">Upload</button>
                <div>{renderFiles(images, 'images')}</div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black">Upload Notices</h2>
                <div className="flex items-center">
                    <input type="file" onChange={handleChange} className="mr-2 bg-white rounded-md shadow-md px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <span className="text-black font-medium">{uploadedFileName}</span>
                </div>
                <button onClick={() => handleUpload('notices')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">Upload</button>
                <div>{renderFiles(notices, 'notices')}</div>
            </div>
        </div>
    );
};

export default Upload;
