const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// Day 1
const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const loginForm = document.querySelector("#loginForm");
const logInInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");

let login = localStorage.getItem("gloDelivery");

// modalAuth.classList.add("hello");
// modalAuth.classList.remove("hello");

function toogleModalAuth() {
  modalAuth.classList.toggle("is-open");
}

buttonAuth.addEventListener("click", function () {
  toogleModalAuth();
});
closeAuth.addEventListener("click", function () {
  toogleModalAuth();
});

function authorized() {
  function logOut() {
    login = null;
    localStorage.removeItem("gloDelivery");
    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";
    buttonOut.removeEventListener("click", logOut);

    checkAuth();
  }
  console.log("Authorized");

  userName.textContent = login;

  buttonAuth.style.display = "none";
  userName.style.display = "inline";
  buttonOut.style.display = "block";

  buttonOut.addEventListener("click", logOut);
}

function notAuthoRized() {
  console.log("Not Authorized");

  function logIn(event) {
    if (login === "") {
      alert("Add Login");
    }
    event.preventDefault();
    login = logInInput.value;
    localStorage.setItem("gloDelivery", login);
    toogleModalAuth();
    logInForm.removeEventListener("submit", logIn);
    logInForm.reset();
    checkAuth();
  }

  logInForm.addEventListener("submit", logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthoRized();
  }
}

checkAuth();
