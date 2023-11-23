import React from 'react';
import loading from '@/assets/images/loading.svg';

export const Loading: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">
            <img src={loading} />
        </div>
    );
};