'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../firebaseConfig';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { DocumentTextIcon, PhotographIcon } from '@heroicons/react/outline';

const DocumentView = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchFiles('documents', setDocuments);
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

    const renderFiles = (files, folder) => {
        return files.map((file, index) => (
            <div key={index} className="my-2 flex flex-col items-center border border-gray-300 p-4 rounded-lg">
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <DocumentTextIcon className="h-12 w-12 mb-2 text-gray-600" />
                    <span style={{color:"black", textAlign: "center"}}>{file.name}</span>
                </a>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-black">Documents</h2>
                <div>{renderFiles(documents, 'documents')}</div>
            </div>
        </div>
    );
};

export default DocumentView;
