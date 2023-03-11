// update

// variables
import {
  titleCreate,
  textCreate,
  updateAndDeleteURL,
  updateForm,
  deleteBtn,
  signoutBtn,
} from "./modules/variables/variables.mjs";

// functions
import { success } from "./modules/functions/posts/disableForm.mjs";
import { fetchPostInfo } from "./modules/functions/posts/getSpesificPost.mjs";
import { updatePost } from "./modules/functions/posts/updatePost.mjs";
import { deletePost } from "./modules/functions/posts/deletePost.mjs";
import { signOut } from "./modules/functions/user/signout.mjs";

textCreate.addEventListener("keyup", success);
titleCreate.addEventListener("keyup", success);

fetchPostInfo(updateAndDeleteURL);

updateForm.addEventListener("submit", updatePost);

deleteBtn.addEventListener("click", deletePost);

signoutBtn.addEventListener("click", signOut);
