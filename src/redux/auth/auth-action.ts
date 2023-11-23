import { AppThunk } from "..";
import { createBrowserHistory } from "history";
import { Creds } from "../../types/creds";
import { Reset } from "../../types/reset";
import { authService } from "@/services";

class AuthActionThunk {
  login(creds: Creds): AppThunk {
    return async (_getState) => {
      await authService.login(creds);
    };
  }

  reset(email: Reset): AppThunk {
    return async (_getState) => {
      const history = createBrowserHistory();
      const res: Boolean = await authService.reset(email.email);
      if (res) {
        history.push("/modifierMotDePasseProvisoire");
        window.location.reload();
      }
    };
  }
}
const authActionThunk = new AuthActionThunk();

export default authActionThunk;
