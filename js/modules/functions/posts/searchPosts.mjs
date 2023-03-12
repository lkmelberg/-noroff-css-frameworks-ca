import {
  postsContainer,
  loader,
  token,
  userName,
  searchInput,
  createAndGetURL,
} from "../../variables/variables.mjs";

/**
 *  Fetches and displays an array of posts based on search input
 *  @param {Event} e - The event object triggered by the button click.
 *  @returns {Promise} A Promise that resolves with the JSON response from the server if the posts were fetched successfully. Otherwise, it rejects with an error message.
 */
export function fetchFiltered(e) {
  // dont move from page
  e.preventDefault();

  // if there is a name, noroff adress and 8 character password - create account
  // registerUser function
  async function filtered(url) {
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

      const searchedPost = json.filter((post) => {
        if (
          post.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
          post.body.toLowerCase().includes(searchInput.value.toLowerCase()) ||
          post.author.name
            .toLowerCase()
            .includes(searchInput.value.toLowerCase()) ||
          post.id === parseInt(searchInput.value)
        ) {
          return true;
        }
      });

      console.log(searchedPost);

      searchedPost.forEach(function (post) {
        const { id, title, body, author } = post;
        const postDate = post.created.substring(0, 10);
        const postTime = post.created.substring(11, 16);
        const postAuthor = author.name;
        // MIGHT ADD TAGS LATER
        //   const postTags = post.tags;
        //   <p class="card-text">Tags:${postTags}</p>;

        if (author.name === userName) {
          postsContainer.innerHTML += `<a href="update.html?id=${id}"><div class="card mb-3 searchCard">
                  <div class="card-body">
                  <div class="topCard">
                      <h4 class="card-title">${title}</h4>
                      <div class="updateEdit">
                      <i class="fa-solid fa-pen-to-square"></i>
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

  filtered(createAndGetURL);
}
