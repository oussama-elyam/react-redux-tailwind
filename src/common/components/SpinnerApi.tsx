import React from 'react';
import { TailSpin } from 'react-loader-spinner';

interface Props {
    loading: boolean;
}

export const SpinnerApi: React.FC<Props> = ({ loading }) => {
    return loading ? (
        <div className=" pl-10 absolute flex justify-center items-center  z-auto inset-0 w-full text-left align-middle transition-all transform">
            <div className="flex flex-col  justify-center items-center">
                <TailSpin
                    height="100"
                    width="100"
                    color="#e31d1d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    ) : (
        <></>
    );
};