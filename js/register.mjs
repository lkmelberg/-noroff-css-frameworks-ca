import { regForm } from "./modules/variables/variables.mjs";
import { register } from "./modules/functions/user/create.mjs";
import { checkIfsignedIn } from "./modules/functions/user/isSignedIn.mjs";

regForm.addEventListener("submit", register);

checkIfsignedIn();
