import {
  createAndGetURL,
  postsContainer,
  loader,
  token,
  userName,
} from "../../variables/variables.mjs";

export async function fetchMyposts(url) {
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
    const myPostArray = json
      .slice()
      .filter((post) => post.author.name === userName);

    postsContainer.innerHTML = "";
    //   all post
    myPostArray.forEach(function (post) {
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
      } else {
        postsContainer.innerHTML += `<h4>Sorry, no posts found :(</h4>`;
      }
    });

    loader.classList.add("hide");
  } catch (error) {
    console.log(error);
  }
}

export function myOnly(e) {
  e.preventDefault();
  try {
    fetchMyposts(createAndGetURL);
  } catch (error) {
    console.log(error);
  }
}
