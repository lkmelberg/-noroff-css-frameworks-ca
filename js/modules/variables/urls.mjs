import { id } from "../update.js";

// url to access api endpoints
export const API_BASE_URL = "https://nf-api.onrender.com";

// User endpoints

// register endpoint
export const registerURL = `${API_BASE_URL}/api/v1/social/auth/register`;
// login endpoint
export const signinURL = `${API_BASE_URL}/api/v1/social/auth/login`;
// authenticate endpoint

// post(s) endpoints

// Get all entries & Create entry
// POST / api / v1 / social / posts;
export const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

// Update entry & Delete entry
// PUT /api/v1/social/posts/<id>
// export const updateAndDeleteURL = `${API_BASE_URL}/api/v1/social/posts/${id}?_author=true`;
