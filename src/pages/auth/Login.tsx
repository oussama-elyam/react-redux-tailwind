import React, { useEffect, useState } from "react";
import logo from "@/assets/react.svg";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import { Creds } from "@/types/creds";
import { useAppDispatch } from "@/common/hooks/redux-hooks";
import authActionThunk from "@/redux/auth/auth-action";
import useAuth from "@/common/hooks/useAuth";
import { FooterLogin, SpinnerApi } from "@/common";
import { InputAuth } from "@/common/components/inputAuth";
import { ButtonAuth } from "@/common/components/ButtonAuth";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [load, setLoading] = useState(false);
  const { auth, isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: Creds,
    actions: { resetForm: () => void }
  ) => {
    setLoading(true);
    await dispatch(authActionThunk.login(values));
    setLoading(false);
    actions.resetForm();
    goToHomeClient();
  };

  const goToHomeClient = () => {

  };
  const goToReset = () => {
    navigate("/resetMotDePasse");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<Creds>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isAuthenticated) {
      goToHomeClient();
    }
  }, [auth]);

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen w-screen">
        <div className="items-start">
          <div className="flex flex-col items-center mt-20">
            <img className="mb-10 ml-4 md:h-32 h-20" src={logo} alt="logo" />
            <h2 className=" mb-10 md:text-[50px] text-[30px] font-bold text-black">
              Connectez-vous !
            </h2>
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
                icon="material-symbols:person-outline"
              />

              <InputAuth
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
                name="password"
                type="password"
                placeholder="Mot de passe"
                icon="mdi:password-outline"
              />
              <ButtonAuth
                isSubmitting={isSubmitting}
                type="submit"
                label="Se connecter"
              />
              <button className="m-3 ">
                <a
                  onClick={goToReset}
                  className="text-1xl font-semibold text-black underline "
                >
                  Mot de passe oublié?
                </a>
              </button>
            </form>
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