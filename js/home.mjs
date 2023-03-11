// home

// variables
import { createAndGetURL, postForm } from "./modules/variables/variables.mjs";

// fucntions
import { fetchPosts } from "./modules/posts/allPosts.mjs";
import { success } from "./createPosts.mjs";
import { createPost } from "./createPosts.mjs";

fetchPosts(createAndGetURL);

success();

postForm.addEventListener("submit", createPost);
