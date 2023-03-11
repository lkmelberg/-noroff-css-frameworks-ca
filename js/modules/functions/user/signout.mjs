// Sign out

/**
Signs out user, removed token and username from localstorage
    */

export function signOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userName");
}

// signoutBtn.addEventListener("click", signOut);
