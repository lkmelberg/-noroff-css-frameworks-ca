import {
  updateAndDeleteURL,
  token,
  displayMSG,
  updateForm,
} from "../../variables/variables.mjs";

// delete

/**
 * Deletes the post with the specified ID.
 * @param {Event} e - The event object triggered by the button click.
 * @returns {Promise} A Promise that resolves with the JSON response from the server if the post was deleted successfully
 * Otherwise, it rejects with an error message.
 */
export function deletePost(e) {
  // dont move from page
  e.preventDefault();

  /**
   * Sends a DELETE request to the specified URL.
   * @param {string} url - The URL to send the request to.
   * @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
   * Otherwise, it rejects with an error message.
   */
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
      }, 4000);
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
  // Send a DELETE request to delete the specified post.
  deleteP(updateAndDeleteURL);
}

// deleteBtn.addEventListener("click", deletePost);
