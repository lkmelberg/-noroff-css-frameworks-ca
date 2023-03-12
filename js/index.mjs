import { signForm } from "./modules/variables/variables.mjs";
import { signin } from "./modules/functions/user/signin.mjs";

signForm.addEventListener("submit", signin);
