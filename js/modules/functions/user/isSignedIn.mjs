import { token, userName } from "../../variables/variables.mjs";

/**
 * checks if user is signed in, if yes, redirect from signin and register page to home page
 */
export function checkIfsignedIn() {
  if (token && userName) {
    window.location.href = `home.html`;
  }
}

// checkIfsignedIn();
