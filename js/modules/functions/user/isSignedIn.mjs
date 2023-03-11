import { token, userName } from "../../variables/variables.mjs";

export function checkIfsignedIn() {
  if (token && userName) {
    window.location.href = `home.html`;
  }
}

// checkIfsignedIn();
