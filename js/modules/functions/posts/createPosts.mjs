import {
  token,
  createAndGetURL,
  titleCreate,
  textCreate,
  displayMSG,
  postForm,
} from "../../variables/variables.mjs";

/**
 * Creates a new post using the provided input values.
 *  @param {Event} e - The event object triggered by the submit action.
 *  @returns {Promise} A Promise that resolves with the JSON response from the server if the post was created successfully
 * Otherwise, it rejects with an error message.
 */
export function createPost(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const postContent = {
    title: titleCreate.value, // Required
    body: textCreate.value, // Optional
  };

  /**
   * Sends a POST request to the specified URL with the provided data.
   * @param {string} url - The URL to send the request to.
   * @param {object} data - The data to include in the request body.
   * @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
   * Otherwise, it rejects with an error message.
   */
  async function create(url, data) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      displayMSG.innerHTML = `<div class="postSuccess">Post created!</div>`;
      postForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
        location.reload();
      }, 2500);
      return json;
    } catch (error) {
      console.log(error);
      displayMSG.innerHTML = `<div class="postError">Post not created, Sorry about that. Try again or come back later :(</div>`;
      postForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
      }, 5000);
    }
  }
  console.log(postContent);
  // Send a POST request to create a new post.
  create(createAndGetURL, postContent);
}

// postForm.addEventListener("submit", createPost);
