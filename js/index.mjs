import { signForm } from "./modules/variables/variables.mjs";
import { signin } from "./modules/functions/user/signin.mjs";
import { checkIfsignedIn } from "./modules/functions/user/isSignedIn.mjs";

signForm.addEventListener("submit", signin);
checkIfsignedIn();
