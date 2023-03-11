import {
  textCreate,
  titleCreate,
  postBtn,
  addContent,
} from "../../variables/variables.mjs";

// checks if there is input in the create new post form. Disables/enables button when (no) content is present.

export function success() {
  if (textCreate.value === "" || titleCreate.value === "") {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
    addContent.innerHTML = ``;
  }
}

// textCreate.addEventListener("keyup", success);
