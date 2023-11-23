import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Veuillez entrer une adresse e-mail valide').required('Ce champ est obligatoire'),
    password: yup.string().required('Ce champ est obligatoire')
});
