import React from 'react';

const DateDisplay: React.FC = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const weekday = date.toLocaleDateString(undefined, { weekday: 'long' });

    return (
        <div className="border border-gray-300 rounded-lg p-4 w-full">
            <div className="text-3xl font-bold text-gray-800">
                {formattedDate}
            </div>
            <div className="text-lg text-gray-500 mt-2">
                {weekday}
            </div>
        </div>
    );
};

export default DateDisplay;