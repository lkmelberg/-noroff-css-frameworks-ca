const currentID = document.querySelector(".currentID");
const addPostId = document.querySelector(".addPostId");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (id === null) {
//   location.href = "/";
// }

console.log(id);

const API_BASE_URL = "https://nf-api.onrender.com";

// Update entry & Delete entry
// PUT /api/v1/social/posts/<id>
const updateAndDeleteURL = `${API_BASE_URL}/api/v1/social/posts/${id}`;

const token = localStorage.getItem("accessToken");

const updateContainer = document.querySelector(".updateContainer");
const displayMSG = document.querySelector(".displayMSG");
const updateForm = document.querySelector(".updateForm");
const postForm = document.querySelector(".postForm");
const deleteBtn = document.querySelector(".deleteBtn");
const updateBtn = document.querySelector(".updateBtn");
const titleCreate = document.querySelector("#title");
const textCreate = document.querySelector(".textCreate");

function success() {
  if (textCreate.value === "" || titleCreate.value === "") {
    updateBtn.disabled = true;
  } else {
    updateBtn.disabled = false;
  }
}

success();

async function fetchPostInfo(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    if (response.status >= 400 && response.status <= 499) {
      updateContainer.innerHTML = `  <h1 class="addPostId">Post Not Found</h1>
    <p>Redirecting you back to the home page, please wait</p>`;
      setTimeout(function () {
        window.location.href = `home.html`;
      }, 5000);
    } else {
      const json = await response.json();
      console.log(json);

      const { id, title, body } = json;
      titleCreate.value = `${title}`;
      textCreate.value = `${body}`;
      currentID.innerHTML = `${title}`;
      addPostId.innerHTML += `: ${id}`;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPostInfo(updateAndDeleteURL);

function updatePost(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const updateContent = {
    title: titleCreate.value,
    body: textCreate.value,
    //     // tags: ["string"], // Optional
    //     // media: "https://url.com/image.jpg", // Optional
  };

  async function update(url, data) {
    try {
      const postData = {
        method: "PUT",
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
      displayMSG.innerHTML = `<div class="postSuccess">Post updated!</div>`;
      updateForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
        location.reload();
      }, 4000);
      return json;
    } catch (error) {
      console.log(error);
      displayMSG.innerHTML = `<div class="postError">Post not created, Sorry about that. Try again or come back later :(</div>`;
      updateForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
      }, 5000);
    }
  }

  console.log(updateContent);
  update(updateAndDeleteURL, updateContent);
}

updateForm.addEventListener("submit", updatePost);

// delete
function deletePost(e) {
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
        location.reload();
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

deleteBtn.addEventListener("click", deletePost);
