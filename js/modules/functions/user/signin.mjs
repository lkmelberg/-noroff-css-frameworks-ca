import {
  signinURL,
  displayMSG,
  emailSign,
  passSign,
} from "../../variables/variables.mjs";

/**

    Signs in a user if inputs are valid and the user is registered it in the noroff API.
    @param {Event} e - The event object triggered by the button click.
    @returns {Promise} A Promise that resolves with the JSON response from the server if the account was logged in successfully. Otherwise, it rejects with an error message.
    */

export function signin(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const userSign = {
    email: emailSign.value,
    password: passSign.value,
  };

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
        displayMSG.innerHTML = `<div class="signinSuccess">Sign In Successful - Redirecting</div>`;
        setTimeout(function () {
          window.location.href = `home.html`;
        }, 2500);
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

// signForm.addEventListener("submit", signin);
