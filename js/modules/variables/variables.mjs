// API
export const API_BASE_URL = "https://nf-api.onrender.com";
export const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

// common

export const token = localStorage.getItem("accessToken");
export const userName = localStorage.getItem("userName");
export const displayMSG = document.querySelector(".displayMSG");

// Search
export const postsContainer = document.querySelector(".postsContainer");
export const loader = document.querySelector(".loader");
export const searchInput = document.querySelector(".searchInput");
export const searchForm = document.querySelector(".searchForm");

// Sign in
export const emailSign = document.querySelector("#emailSign");
export const passSign = document.querySelector("#passSign");
export const signForm = document.querySelector(".signForm");

// update and edit - post spesific
export const currentID = document.querySelector(".currentID");
export const addPostId = document.querySelector(".addPostId");

export const updateContainer = document.querySelector(".updateContainer");
export const updateForm = document.querySelector(".updateForm");
export const postForm = document.querySelector(".postForm");
export const deleteBtn = document.querySelector(".deleteBtn");
export const updateBtn = document.querySelector(".updateBtn");
export const titleCreate = document.querySelector("#title");
export const textCreate = document.querySelector(".textCreate");
export const btns = document.querySelector(".btns");
export const pageh1 = document.querySelector(".pageh1");

// Register
export const regForm = document.querySelector(".regForm");
export const nameReg = document.querySelector("#nameReg");
export const emailReg = document.querySelector("#emailReg");
export const passReg = document.querySelector("#passReg");
