// Sign out

export function signOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userName");
}

// signoutBtn.addEventListener("click", signOut);
