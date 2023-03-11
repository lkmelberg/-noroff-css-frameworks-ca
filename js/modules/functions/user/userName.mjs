import { userName, profileName } from "../../variables/variables.mjs";
/**
adds profilename dynamically on the home and profile page
    */

export function addProfileName() {
  profileName.innerHTML = `${userName}`;
}

// addProfileName();
