// url to access api endpoints
const API_BASE_URL = "https://nf-api.onrender.com";

// User endpoints

// register endpoint
const registerURL = `${API_BASE_URL}/api/v1/social/auth/register`;
// login endpoint
const signinURL = `${API_BASE_URL}/api/v1/social/auth/login`;
// authenticate endpoint

// post(s) endpoints

// Get all entries & Create entry
// POST / api / v1 / social / posts;
const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts`;

// Update entry & Delete entry
// PUT /api/v1/social/posts/<id>
const updateAndDeleteURL = `${API_BASE_URL}/api/v1/social/posts/<id>`;

export { registerURL, signinURL, createAndGetURL, updateAndDeleteURL };
