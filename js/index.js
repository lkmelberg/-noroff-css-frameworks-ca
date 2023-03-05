// sign in page
import { signin } from "./modules/signin";

const btnSign = document.querySelector(".btnSign");

const displayMSG = document.querySelector(".displayMSG");

const signForm = document.querySelector(".signForm");

const emailSign = document.querySelector("#emailSign");
const passSign = document.querySelector("#passSign");

signForm.addEventListener("submit", signin);
