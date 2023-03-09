import { fetchFiltered } from "./modules/posts/filter.mjs";
import { searchForm } from "./modules/variables/variables.mjs";

searchForm.addEventListener("submit", fetchFiltered);
