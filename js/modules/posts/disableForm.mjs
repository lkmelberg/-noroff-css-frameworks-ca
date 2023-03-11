import {
  textCreate,
  titleCreate,
  postBtn,
  addContent,
} from "../variables/variables.mjs";

export function success() {
  if (textCreate.value === "" || titleCreate.value === "") {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
    addContent.innerHTML = ``;
  }
}

// textCreate.addEventListener("keyup", success);
