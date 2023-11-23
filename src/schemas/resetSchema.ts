import * as yup from 'yup';

export const resetSchema = yup.object().shape({
    email: yup.string().email('Veuillez entrer une adresse e-mail valide').required('Ce champ est obligatoire'),
});
