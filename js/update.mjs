// update

// variables
import {
  titleCreate,
  textCreate,
  updateAndDeleteURL,
  updateForm,
  deleteBtn,
} from "./modules/variables/variables.mjs";

// functions
import { success } from "./modules/posts/disableForm.mjs";
import { fetchPostInfo } from "./modules/posts/getSpesificPost.mjs";
import { updatePost } from "./modules/posts/editPost.mjs";
import { deletePost } from "./modules/posts/deletePost.mjs";

textCreate.addEventListener("keyup", success);
titleCreate.addEventListener("keyup", success);

fetchPostInfo(updateAndDeleteURL);

updateForm.addEventListener("submit", updatePost);

deleteBtn.addEventListener("click", deletePost);
