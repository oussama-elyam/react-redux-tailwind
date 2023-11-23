import { Icon } from '@iconify/react';
import React from 'react';

interface Props {
    values: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    errors: any;
    touched: any;
    name: string;
    type: string;
    placeholder: string;
    icon: string;
}

export const InputAuth: React.FC<Props> = ({
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    name,
    type,
    placeholder,
    icon,
}) => {

    return (

        < label className="flex flex-col mb-2" >
            <div className="border-2 border-black shadow-lg bg-white max-md:w-[300px] md:w-96 p-2 flex items-center mt-2">
                {icon && (
                    <Icon
                        icon={icon}
                        fontSize={icon === 'material-symbols:person-outline' ? 25 : 22}
                        className="text-black m-2"
                    />
                )}
                <input
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={name}
                    type={type}
                    className="focus:outline-none w-full"
                    name={name}
                    placeholder={placeholder}
                />
            </div>
            {
                errors[name] && touched[name] && (
                    <p className="text-base text-red-600">{errors[name]}</p>
                )
            }
        </label >
    );
};