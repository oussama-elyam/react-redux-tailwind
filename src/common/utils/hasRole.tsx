import store from "../../redux";

export const hasRole = (...roles: string[]) => {
  const { auth } = store.getState().auth;
  return auth.app_admin ? true : roles.includes(auth.role ?? "");
};
