import React from 'react';

const PictureFrame: React.FC = () => {
    return (
        <div className="my-4 w-36 h-36 rounded-lg bg-gray-300 flex justify-center items-center">
            <img src="/images/empty-profile.jpg" alt="Picture" className="rounded-lg w-full h-full" />
        </div>
    );
};

export default PictureFrame;
