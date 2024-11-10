import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Notice = {
    id: number;
    title: string;
    pdfUrl: string;
};

const notices: Notice[] = [
    { id: 1, title: 'Notice 1: Semester Schedule', pdfUrl: 'https://www.w3.org/WAI/WCAG21/quickref/Overview.pdf' },
    { id: 2, title: 'Notice 2: Exam Timetable', pdfUrl: 'https://www.w3.org/WAI/WCAG21/quickref/Overview.pdf' },
    { id: 3, title: 'Notice 3: Holidays Announcement', pdfUrl: 'https://www.w3.org/WAI/WCAG21/quickref/Overview.pdf' },
];

const NoticesPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    const openPdf = (pdfUrl: string) => {
        setSelectedPdf(pdfUrl);
        setIsOpen(true);
    };

    const closePdf = () => {
        setIsOpen(false);
        setSelectedPdf(null);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Notices</h1>
                <p className="text-lg mb-8 text-gray-700">Click on a notice below to view the PDF!</p>

                <div className="flex flex-col gap-6 max-w-3xl w-full">
                    {notices.map((notice) => (
                        <div
                            key={notice.id}
                            className="cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            onClick={() => openPdf(notice.pdfUrl)}
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                            <p className="text-gray-600 mt-2">Click to view the full notice (PDF).</p>
                        </div>
                    ))}
                </div>

                {isOpen && selectedPdf && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="relative bg-white p-6 rounded-lg max-w-4xl">
                            <button
                                className="absolute top-0 right-0 p-3 text-white bg-red-600 rounded-full hover:bg-red-700"
                                onClick={closePdf}
                            >
                                X
                            </button>
                            <div className="text-center mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">Viewing PDF</h2>
                            </div>
                            <div className="w-full h-[80vh] overflow-auto">
                                <iframe
                                    src={selectedPdf}
                                    title="Notice PDF"
                                    className="w-full h-full"
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default NoticesPage;
