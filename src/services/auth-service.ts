import { Creds } from "../types/creds";
import { taostAuthSucces, toastAuthWarn, toastEmailIncorrect } from "../common";
import { taostErrorServeur } from "../common";
import { client } from "../common";
import axios, { AxiosError } from "axios";

class AuthService {
  private URI = "/auth";

  async login(creds: Creds): Promise<void> {
    try {
      const res = await client.post(`${this.URI}/login`, creds);
      if (res.status == 200) {
        taostAuthSucces();
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 403) {
        toastAuthWarn();
      } else {
        taostErrorServeur();
      }
    }
  }

  async reset(email: String): Promise<Boolean> {
    try {
      const res = await axios.get(this.URI + "/reset-password/" + email);
      if (res.status == 200) {
        taostAuthSucces("Veuillez vérifier votre boîte de réception");

        return true;
      }
      return false;
    } catch (err: AxiosError | unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        toastEmailIncorrect();
      } else {
        taostErrorServeur();
      }
      return false;
    }
  }
}

export const authService = new AuthService();
