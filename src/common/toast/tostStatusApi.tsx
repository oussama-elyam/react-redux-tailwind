import { toast } from 'react-toastify';

export const taostErrorClient = (message ?: string) =>
    toast.error(message??'Requête invalide', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

export const taostSuccesClient = (data?: string) =>
toast.success(data??'Opération réussie', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});

export const taostDejaExist = (data?: string) =>
toast.success(data??'Les donnés déja exite', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});


export const taostErrorServeur = (data?: string) =>
    toast.warn(data??'Erreur interne du serveur', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });