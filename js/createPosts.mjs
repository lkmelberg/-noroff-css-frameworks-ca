// import { createAndGetURL } from "./modules/urls";
// import { updateAndDeleteURL } from "./modules/urls";

const API_BASE_URL = "https://nf-api.onrender.com";

// Get all entries & Create entry
// POST / api / v1 / social / posts;
export const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

const displayMSG = document.querySelector(".displayMSG");

// get all posts

const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");

// create post
const postBtn = document.querySelector(".postBtn");
const postForm = document.querySelector(".postForm");
const titleCreate = document.querySelector("#title");
const textCreate = document.querySelector(".textCreate");
const addContent = document.querySelector(".addContent");

export function success() {
  if (textCreate.value === "" || titleCreate.value === "") {
    postBtn.disabled = true;
    addContent.innerHTML = `<small>Title and content required</small>`;
  } else {
    postBtn.disabled = false;
    addContent.innerHTML = ``;
  }
}

success();

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

postForm.addEventListener("submit", createPost);
