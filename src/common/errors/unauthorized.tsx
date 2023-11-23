import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-48">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <div className="text-indigo-500 font-bold text-7xl">401</div>

                    <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                        Vous n'avez pas l'autorisation
                    </div>

                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                        La page que vous consulté est interdit.
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="rounded bg-primary p-3 mt-5 text-xs font-medium uppercase leading-normal text-white bg-blue-500"
                    >
                        page d'accueil
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Unauthorized;
