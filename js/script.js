// Reusable scripts and modules will be found here

// Sign out
const signoutBtn = document.querySelector(".signout");

function removeToken() {
  localStorage.removeItem("accessToken");
}

signoutBtn.addEventListener("click", removeToken);
