import {
  updateAndDeleteURL,
  token,
  displayMSG,
  updateForm,
  deleteBtn,
} from "../variables/variables.mjs";

// delete
export function deletePost(e) {
  // dont move from page
  e.preventDefault();

  async function deleteP(url) {
    try {
      const postData = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      displayMSG.innerHTML = `<div class="postSuccess">Post deleted! Redirecting you home</div>`;
      updateForm.reset();
      setTimeout(function () {
        window.location.href = `home.html`;
      }, 5000);
      return json;
    } catch (error) {
      console.log(error);
      displayMSG.innerHTML = `<div class="postError">Post not deleted, Sorry about that. Try again or come back later :(</div>`;
      updateForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
      }, 5000);
    }
  }
  deleteP(updateAndDeleteURL);
}

// deleteBtn.addEventListener("click", deletePost);
