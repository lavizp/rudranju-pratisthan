'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '../../firebaseConfig';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { DocumentTextIcon, PhotographIcon } from '@heroicons/react/outline';

const NoticeView = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
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

    const renderFiles = (files) => {
        return files.map((file, index) => (
            <div key={index} className="my-2 flex items-center">
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <DocumentTextIcon className="h-6 w-6 mr-2 text-gray-600" />
                    <span style={{color: "black"}}>{file.name}</span>
                </a>
            </div>
        ));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div>
                <h2 className="text-lg font-semibold mb-2 text-black">Notices</h2>
                <div>{renderFiles(notices)}</div>
            </div>
        </div>
    );
};

export default NoticeView;
