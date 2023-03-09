// import { createAndGetURL } from "./modules/urls";
// import { updateAndDeleteURL } from "./modules/urls";

const API_BASE_URL = "https://nf-api.onrender.com";

// Get all entries & Create entry
// POST / api / v1 / social / posts;
const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

const displayMSG = document.querySelector(".displayMSG");

// get all posts

const postsContainer = document.querySelector(".postsContainer");
const loader = document.querySelector(".loader");
const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");

async function fetchPosts(url) {
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
    const json = await response.json();
    const postArray = json.slice().sort((a, b) => b.created - a.created);
    console.log(postArray);

    postsContainer.innerHTML = "";

    //   all post
    postArray.forEach(function (post) {
      const { id, title, body, author } = post;
      const postDate = post.created.substring(0, 10);
      const postTime = post.created.substring(11, 16);
      const postAuthor = author.name;
      //   const postTags = post.tags;
      //   <p class="card-text">Tags:${postTags}</p>;

      postsContainer.innerHTML += `
         <a href="update.html?id=${id}">
         <div class="card mb-3">
                <div class="card-body">
               
                    <h4 class="card-title">${title}</h4>
                     <div class="updateEdit"> </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b></small></p>
                
                </div>
            </div>
            </a>`;

      if (author.name === userName) {
        postsContainer.innerHTML += `    <a href="update.html?id=${id}"><div class="card mb-3">
                <div class="card-body">
                <div class="topCard">
                    <h4 class="card-title">${title}</h4>
                    <div class="updateEdit">
                    <a href="update.html?id=${id}" class="updateLink"><h5>Edit or Delete Post</h5></a>
                     </div>
                    
                    </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b></small></p>
                
                </div>
            </div>
            </a>`;
      }
    });

    loader.classList.add("hide");
  } catch (error) {
    console.log(error);
  }
}

fetchPosts(createAndGetURL);

// get searched posts

// create post
const postBtn = document.querySelector(".postBtn");
const postForm = document.querySelector(".postForm");
const titleCreate = document.querySelector("#title");
const textCreate = document.querySelector(".textCreate");
const addContent = document.querySelector(".addContent");

function success() {
  if (textCreate.value === "" || titleCreate.value === "") {
    postBtn.disabled = true;
    addContent.innerHTML = `<small>Title and content required</small>`;
  } else {
    postBtn.disabled = false;
    addContent.innerHTML = ``;
  }
}

success();

function createPost(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const postContent = {
    title: titleCreate.value, // Required
    body: textCreate.value, // Optional
    // tags: ["string"], // Optional
    // media: "https://url.com/image.jpg", // Optional
  };

  // if there is a name, noroff adress and 8 character password - create account
  // registerUser function
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
