import {
  createAndGetURL,
  postsContainer,
  loader,
  token,
  userName,
} from "../../variables/variables.mjs";

// Gets all posts - works on both default for home and profile page, but is also clickable from filter button
/**
    Sends a GET request to the specified URL with the provided data.
    @param {string} url - The URL to send the request to.
    @param {object} data - The data to include in the request body.
    @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful. Otherwise, it rejects with an error message.
    */

export async function fetchPosts(url) {
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

      if (author.name === userName) {
        postsContainer.innerHTML += `    <a href="update.html?id=${id}"><div class="card mb-3">
                <div class="card-body">
                <div class="topCard">
                    <h4 class="card-title">${title}</h4>
                    <div class="updateEdit">
<i class="fa-solid fa-pen-to-square"></i>
                     </div>
                    
                    </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b> - post: ${id}</small></p>
                
                </div>
            </div>
            </a>`;
      }
      if (author.name !== userName) {
        postsContainer.innerHTML += `
         <a href="update.html?id=${id}">
         <div class="card mb-3">
                <div class="card-body">
               
                    <h4 class="card-title">${title}</h4>
                     <div class="updateEdit"> </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b> - post: ${id}</small></p>
                
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

// fetchPosts(createAndGetURL);

/**

    Creates gets all posts using the provided input values.
    @param {Event} e - The event object triggered by the submit action.
    @returns {Promise} A Promise that resolves with the JSON response from the server if the post was created successfully. Otherwise, it rejects with an error message.
    */

export function getAll(e) {
  e.preventDefault();
  try {
    fetchPosts(createAndGetURL);
  } catch (error) {
    console.log(error);
  }
}
