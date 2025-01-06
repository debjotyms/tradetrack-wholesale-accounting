import React from 'react';

const PictureFrame: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <div className="relative my-4 w-36 h-36 rounded-lg bg-gray-300 flex justify-center items-center group overflow-hidden">
                <img src="/images/empty-profile.jpg" alt="Picture" className="rounded-lg w-full h-full" />
                <button className="outline-none absolute bottom-0 w-full h-7 bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-full transition-all duration-300">
                    <span className='text-sm'>
                        Upload
                    </span>
                </button>
            </div>
        </div>
    );
};

export default PictureFrame;
