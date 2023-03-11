// variables
import {
  titleCreate,
  textCreate,
  createAndGetURL,
  postForm,
  signoutBtn,
  btnAllPosts,
  btnMyPosts,
} from "./modules/variables/variables.mjs";

// fucntions
import { success } from "./modules/functions/posts/disableForm.mjs";
import { getAll, fetchPosts } from "./modules/functions/posts/getAllPosts.mjs";
import { myOnly } from "./modules/functions/posts/usernameFilter.mjs";
import { createPost } from "./modules/functions/posts/createPosts.mjs";
import { signOut } from "./modules/functions/user/signout.mjs";
import { addProfileName } from "./modules/functions/user/userName.mjs";

fetchPosts(createAndGetURL);
btnMyPosts.addEventListener("click", myOnly);
btnAllPosts.addEventListener("click", getAll);

textCreate.addEventListener("keyup", success);
titleCreate.addEventListener("keyup", success);

postForm.addEventListener("submit", createPost);

signoutBtn.addEventListener("click", signOut);

addProfileName();
