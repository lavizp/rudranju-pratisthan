import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <div className="text-lg font-bold">Logo</div>
        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/notices">Notices</Link>
        </div>
    </nav>
);

export default Navbar;