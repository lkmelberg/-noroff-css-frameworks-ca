import { createAndGetURL } from "../../variables/variables.mjs";
import {
  postsContainer,
  loader,
  token,
  userName,
} from "../../variables/variables.mjs";

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
                    <a href="update.html?id=${id}" class="updateLink"><h5>Edit or Delete Post</h5></a>
                     </div>
                    
                    </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b></small></p>
                
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

// fetchPosts(createAndGetURL);
