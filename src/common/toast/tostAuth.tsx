import { toast } from 'react-toastify';

export const taostAuthSucces = (data?: string) =>
    toast.success(data??' Connexion réussie', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
    });

export const toastAuthWarn = (data?: string) =>
toast.warn(data??'Authentification échouée', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
});

export const toastPasswordIncorrect = (data?: string) =>
toast.warn(data??'Ancien mot de passe est incorrect', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
});

export const toastEmailIncorrect = (data?: string) =>
toast.warn(data??'Adresse email incorrecte', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
});

export const taostLogoutSuccess = (data?: string) =>
    toast.success(data??'Déconnexion réussie', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
    });