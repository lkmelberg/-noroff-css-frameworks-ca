import { regForm } from "./modules/variables/variables.mjs";
import { register } from "./modules/functions/user/create.mjs";

regForm.addEventListener("submit", register);
