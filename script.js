const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("login");

const result = document.getElementById("result");

function login() {
  let username = usernameInput.value;
  let password = passwordInput.value;

  if (
    username === localStorage.key ||
    password === localStorage.getItem("alperen")
  ) {
    result.innerHTML = "logged in";
  } else {
    result.innerHTML = "username or password is wrong";
  }
}

loginBtn.addEventListener("click", login);

