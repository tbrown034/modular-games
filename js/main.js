import { intTic } from "/js/ticTac.js";
import { intRps } from "./rps.js";
import { intRock } from "/js/rock.js";

// main selectors

const selectTic = document.getElementById("select-tic");
const selectRps = document.getElementById("select-rps");
const selectConnect = document.getElementById("select-connect");

// event listeners

selectTic.addEventListener("click", () => {
  intTic();
});

selectRps.addEventListener("click", () => {
  intRps();
});

selectConnect.addEventListener("click", () => {
  intRock();
});
