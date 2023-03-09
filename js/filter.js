const API_BASE_URL = "https://nf-api.onrender.com";

// Get all entries & Create entry
// POST / api / v1 / social / posts;
const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

const postsContainer = document.querySelector(".postsContainer");
const loader = document.querySelector(".loader");
const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");
const searchInput = document.querySelector(".searchInput");
const searchForm = document.querySelector(".searchForm");

// searchForm.addEventListener("submit", fetchFiltered);

function fetchFiltered(e) {
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

      // filtered Array
      //   const searchedPost = postArray.filter(
      //     (post) => post.title.value === searchInput.value
      //   );
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

      //   function filterPosts(array, string) {
      //     return array.filter((post) =>
      //       post.title.some((k) =>
      //         String(o[k]).toLowerCase().includes(string.toLowerCase())
      //       )
      //     );
      //   }

      //   const searchedPost = filterPosts(postArray, searchInput.value);

      console.log(searchedPost);

      searchedPost.forEach(function (post) {
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

                      <h4 class="card-title">${title} id ${id}</h4>
                       <div class="updateEdit"> </div>
                      <p class="card-text">${body}</p>
                      <p class="card-text"><small class="text-muted created">Created: ${postDate} at ${postTime} by <b>${postAuthor}</b></small></p>

                  </div>
              </div>
         </a>`;

        if (author.name === userName) {
          postsContainer.innerHTML += `<a href="update.html?id=${id}"><div class="card mb-3">
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

  filtered(createAndGetURL);
}

searchForm.addEventListener("submit", fetchFiltered);
