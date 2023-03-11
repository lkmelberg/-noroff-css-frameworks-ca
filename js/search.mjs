import { searchForm, signoutBtn } from "./modules/variables/variables.mjs";

import { fetchFiltered } from "./modules/functions/posts/filterPosts.mjs";
import { signOut } from "./modules/functions/user/signout.mjs";

searchForm.addEventListener("submit", fetchFiltered);

signoutBtn.addEventListener("click", signOut);
