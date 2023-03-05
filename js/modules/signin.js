// Sign in
import { signinURL } from "./urls.js";

const btnReg = document.querySelector(".btnReg");
const btnSign = document.querySelector(".btnSign");

const displayMSG = document.querySelector(".displayMSG");
const regForm = document.querySelector(".regForm");
const nameReg = document.querySelector("#nameReg");
const emailReg = document.querySelector("#emailReg");
const passReg = document.querySelector("#passReg");

const signForm = document.querySelector(".signForm");

const emailSign = document.querySelector("#emailSign");
const passSign = document.querySelector("#passSign");

// register

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
      localStorage.setItem("accessToken", accessToken);
      console.log(json);
      console.log(accessToken);
      if (accessToken !== undefined && response.ok) {
        window.location.href = `home.html`;
        displayMSG.innerHTML = `<div class="signinSuccess"><div class="">Sign In Successful - Redirecting</div><div>Try again or register an account</div></div>`;
      }
      if (accessToken === undefined) {
        displayMSG.innerHTML = `<div class="signinError"><div class="signinErrorTop">Sign In failed</div><div>Try again or register an account</div></div>`;
      } else {
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
