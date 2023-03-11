import {
  createAndGetURL,
  titleCreate,
  textCreate,
  displayMSG,
  postForm,
} from "../../variables/variables.mjs";

export function createPost(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const postContent = {
    title: titleCreate.value, // Required
    body: textCreate.value, // Optional
    // tags: ["string"], // Optional
    // media: "https://url.com/image.jpg", // Optional
  };

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
      }, 4000);
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

  create(createAndGetURL, postContent);
}

// postForm.addEventListener("submit", createPost);
