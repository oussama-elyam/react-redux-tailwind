import React from 'react';

interface ButtonProps {
    isSubmitting: boolean;
    type: 'submit' | 'button';
    label: string;
}

export const ButtonAuth: React.FC<ButtonProps> = ({ isSubmitting, type, label }) => {
    return (
        <button
            disabled={isSubmitting}
            type={type}
            className="shadow-lg mt-3 max-md:w-[300px] md:w-96 border-2 border-indigo-900 md:px-24 px-[95px] py-3 inline-block font-semibold hover:bg-indigo-900 hover:text-white"

        >
            {label}
        </button>
    );
};
