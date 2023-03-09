// home
import { createAndGetURL } from "../variables/variables.mjs";
import { fetchPosts } from "./modules/posts/allPosts.mjs";

fetchPosts(createAndGetURL);
