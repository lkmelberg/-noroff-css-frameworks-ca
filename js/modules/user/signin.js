// Sign in
import { signinURL } from "../modules/urls.mjs";
const displayMSG = document.querySelector(".displayMSG");
const emailSign = document.querySelector("#emailSign");
const passSign = document.querySelector("#passSign");
const signForm = document.querySelector(".signForm");

export function signin(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const userSign = {
    email: emailSign.value,
    password: passSign.value,
  };

  // if there is a name, noroff adress and 8 character password - create account
  // registerUser function
  async function signinUser(url, data) {
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
      const json = await response.json();
      const accessToken = json.accessToken;
      const userName = json.name;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);
      console.log(json);
      console.log(accessToken);
      if (accessToken !== undefined && response.ok) {
        window.location.href = `home.html`;
        displayMSG.innerHTML = `<div class="signinSuccess"><div class="">Sign In Successful - Redirecting</div><div>Try again or register an account</div></div>`;
      } else if (accessToken === undefined) {
        displayMSG.innerHTML = `<div class="signinError"><div class="signinErrorTop">Sign In failed</div><div>Try again or register an account</div></div>`;
      }
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userSign);
  signinUser(signinURL, userSign);
}

signForm.addEventListener("submit", signin);
