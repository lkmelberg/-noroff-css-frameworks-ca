const API_BASE_URL = "https://nf-api.onrender.com";
const registerURL = `${API_BASE_URL}/api/v1/social/auth/register`;

const displayMSG = document.querySelector(".displayMSG");
const regForm = document.querySelector(".regForm");
const nameReg = document.querySelector("#nameReg");
const emailReg = document.querySelector("#emailReg");
const passReg = document.querySelector("#passReg");

function register(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const userReg = {
    name: nameReg.value,
    email: emailReg.value,
    password: passReg.value,
  };

  // if there is a name, noroff adress and 8 character password - create account
  // registerUser function
  async function registerUser(url, data) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, postData);
      console.log(response);
      const responseAfter = await response;
      if (
        responseAfter.ok &&
        responseAfter.status >= 200 &&
        responseAfter.status <= 299
      ) {
        displayMSG.innerHTML = `<div class="registerSuccess">Your account has been created, please return to sign in page</div>`;
        regForm.reset();
      } else {
        displayMSG.innerHTML = `<div class="registerError"><div class="registerErrorTop">Your registration failed, try again.</div><div>Make sure your email address ends with @noroff.no and your password is at least 8 characters</div></div>`;
        regForm.reset();
      }
      // if (responseAfter.ok === false && responseAfter.status === 404) {
      //   displayMSG.innerHTML = `<div class="registerSuccess">Your account has been deleted</div>`;
      //   regForm.reset();
      // }

      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userReg);
  registerUser(registerURL, userReg);
}

regForm.addEventListener("submit", register);
