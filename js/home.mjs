// home

// variables
import {
  textCreate,
  createAndGetURL,
  postForm,
} from "./modules/variables/variables.mjs";

// fucntions
import { success } from "./modules/posts/disableForm.mjs";
import { fetchPosts } from "./modules/posts/getAllPosts.mjs";
import { createPost } from "./modules/posts/createPosts.mjs";

fetchPosts(createAndGetURL);

textCreate.addEventListener("keyup", success);
titleCreate.addEventListener("keyup", success);

postForm.addEventListener("submit", createPost);
