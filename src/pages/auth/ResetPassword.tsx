import React, { useState } from "react";
import logo from "@/assets/react.svg";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks/redux-hooks";
import { Reset } from "@/types/reset";
import authActionThunk from "@/redux/auth/auth-action";
import { resetSchema } from "@/schemas/resetSchema";
import { SpinnerApi } from "@/common";
import { InputAuth } from "@/common/components/inputAuth";
import { ButtonAuth } from "@/common/components/ButtonAuth";
import { FooterLogin } from "@/common/components/FooterLogin";

export const ResetPassword: React.FC = () => {
    const [load, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    const onSubmit = async (
        values: Reset,
        actions: { resetForm: () => void }
    ) => {
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik<Reset>({
        initialValues: {
            email: "",
        },
        validationSchema: resetSchema,
        onSubmit,
    });

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen w-screen">
                <div className="items-start">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center mt-20">
                            <img className="ml-4 mb-10 md:h-32 h-20" src={logo} alt="logo" />
                            <h2 className=" mb-8 md:text-[50px] text-[25px] font-bold text-black">
                                Mot de passe oublié
                            </h2>
                        </div>
                        <div className="mb-6 flex flex-col items-center">
                            <a className="md:text-lg text-xs font-semibold text-black">
                                Entrez l'adresse e-mail associée à votre compte .
                            </a>
                            <a className="md:text-lg text-xs font-semibold text-black">
                                Et nous vous enverrons un mot de passe
                            </a>
                        </div>
                        <div>
                            <form
                                onSubmit={handleSubmit}
                                autoComplete="off"
                                className="flex flex-col items-center"
                            >
                                <InputAuth
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    icon="ic:outline-email"
                                />

                                <ButtonAuth
                                    isSubmitting={isSubmitting}
                                    type="submit"
                                    label="Envoyer"
                                />
                                <button className="m-3 ">
                                    <a
                                        onClick={goToLogin}
                                        className="text-1xl font-semibold text-black underline "
                                    >
                                        Se connecter à un compte existant?
                                    </a>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="items-end">
                    <FooterLogin />
                </div>
            </div>
            <SpinnerApi loading={load} />
        </>
    );
};
