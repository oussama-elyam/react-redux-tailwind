import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const updateResetSchema = yup.object().shape({
    token: yup.string().required('Ce champ est obligatoire'),
    password: yup
        .string()
        .min(5, 'Le mot de passe doit contenir au moins 5 caractères')
        .matches(passwordRules, { message: 'Veuillez créer un mot de passe plus fort' })
        .required('Ce champ est obligatoire'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
        .required('Ce champ est obligatoire')
});
