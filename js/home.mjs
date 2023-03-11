// home

// variables
import {
  titleCreate,
  textCreate,
  createAndGetURL,
  postForm,
} from "./modules/variables/variables.mjs";

// fucntions
import { success } from "./modules/functions/posts/disableForm.mjs";
import { fetchPosts } from "./modules/functions/posts/getAllPosts.mjs";
import { createPost } from "./modules/functions/posts/createPosts.mjs";

fetchPosts(createAndGetURL);

textCreate.addEventListener("keyup", success);
titleCreate.addEventListener("keyup", success);

postForm.addEventListener("submit", createPost);
