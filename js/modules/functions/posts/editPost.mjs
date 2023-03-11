import {
  updateAndDeleteURL,
  token,
  displayMSG,
  updateForm,
  titleCreate,
  textCreate,
} from "../variables/variables.mjs";

export function updatePost(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const updateContent = {
    title: titleCreate.value,
    body: textCreate.value,
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
      displayMSG.innerHTML = `<div class="postSuccess">Post updated! Please wait</div>`;
      updateForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
        location.reload();
      }, 4000);
      return json;
    } catch (error) {
      console.log(error);
      displayMSG.innerHTML = `<div class="postError">Post not created, Sorry about that. Try again or come back later :() </div>`;
      updateForm.reset();
      setTimeout(function () {
        displayMSG.innerHTML = "";
      }, 5000);
    }
  }

  console.log(updateContent);
  update(updateAndDeleteURL, updateContent);
}

// updateForm.addEventListener("submit", updatePost);
