import React from 'react';

const PictureFrameAdmin: React.FC = () => {
    return (
        <div className='flex flex-col border rounded-lg'>
            <div className="relative w-28 h-28 rounded-lg bg-gray-300 flex justify-center items-center group overflow-hidden">
                <img src="https://img.freepik.com/free-vector/head-chicken-cartoon-style_1308-92600.jpg" alt="Picture" className="rounded-lg w-full h-full" />
                <button className="outline-none absolute bottom-0 w-full h-7 bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-full transition-all duration-300">
                    <span className='text-sm'>
                        Upload
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PictureFrameAdmin;
