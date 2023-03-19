//Up button
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 300
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let darkBtn = document.querySelector(".darck-mode-toggle");

window.onload = () => {
  if (localStorage.getItem("mainColor") === null) {
    // document.querySelectorAll(".col")[0].classList.add("active");
  } else {
    document.body.style.cssText = `--main-color:${localStorage.getItem(
      "mainColor"
    )};
    font-family: "Cairo", sans-serif;
    background-color: ${localStorage.getItem("bodyColor")};`;
    console.log(localStorage.getItem("mainColor"));
  }
  if (localStorage.getItem("bodyColor") === null) {
    // document.querySelectorAll(".col-body")[0].classList.add("active");
  } else {
    document.body.style.backgroundColor = `${localStorage.getItem(
      "bodyColor"
    )};`;
    console.log(localStorage.getItem("bodyColor"));
  }
  if (localStorage.getItem("dark_mode") == "dark") {
    document.body.classList.add("dark");
    document.body.style.backgroundColor = `#333`;
    darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  if (localStorage.getItem("can") == "true") {
    darkBtn.style.display = "block";
  } else if (localStorage.getItem("can") == "false") {
    darkBtn.style.display = "none";
  } else {
    darkBtn.style.display = "none";
  }
};
darkBtn.onclick = function () {
  if (localStorage.getItem("can") == "true") {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark_mode", "dark");
      document.body.style.backgroundColor = `#333`;
      darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      localStorage.setItem("dark_mode", "");
      darkBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      if (localStorage.getItem("bodyColor") === null) {
        document.body.style.backgroundColor = `#dee1e3`;
      } else {
        document.body.style.backgroundColor = `${localStorage.getItem(
          "bodyColor"
        )}`;
      }
    }
  }
};
let initialAdmins = [["Abdallah Fawzi", "A4", 4444]];
initialAdmins.push(["Deyaa Sami", "Deyaa", 1234]);
// localStorage.setItem("initialAdmins", initialAdmins);
let allAdmins = initialAdmins.concat([]);
// console.log(allAdmins);
let addedAdmin = [];
console.log(localStorage.getItem("addedAdmin") === "");
if (
  localStorage.getItem("addedAdmin") !== "" &&
  localStorage.getItem("addedAdmin") !== null
) {
  // let fromSto = localStorage.getItem("addedAdmin").split(",");
  // // console.log(JSON.parse(localStorage.getItem('addedAdmin')));
  // for (let i = 0; i < fromSto.length; i += 3) {
  //   if (fromSto[i] !== "")
  //     allAdmins.push([fromSto[i], fromSto[i + 1], fromSto[i + 2]]);
  // }
  allAdmins = initialAdmins.concat(
    JSON.parse(localStorage.getItem("addedAdmin"))
  );
}
let adminNameInput = document.querySelector(".adminNameInput");
let adminPasswordInput = document.querySelector(".adminPasswordInput");
let btnLogIn = document.querySelector(".btnLogIn");
function btnLogInFun() {
  let check = 0;
  // console.log(adminNameInput.value === "");
  if (adminNameInput.value == "" || adminPasswordInput.value == "") {
    window.alert("يجب أن تملئ كل الإدخالات (¬‿¬)!");
    // adminNameInput.value = "";
    // adminPasswordInput.value = "";
  } else {
    for (let i = 0; i < allAdmins.length; i++) {
      if (
        adminNameInput.value == allAdmins[i][1] &&
        adminPasswordInput.value == allAdmins[i][2]
      ) {
        btnLogIn.classList.add("opening");
        btnLogIn.innerHTML = '<i class="fa-solid fa-check"></i>';
        // console.log(44);
        localStorage.setItem("head_sec", allAdmins[i][0]);
        setTimeout(() => {
          window.open("adminPage.html", "_self");
        }, 1000);
        check++;
        break;
      }
    }
  }
  if (check === 0) {
    btnLogIn.classList.add("closing");
    btnLogIn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    window.alert("أنت ليس آدمن، إرجع (¬‿¬)!");
    setTimeout(() => {
      // window.open("index.html", "_self");
      window.close();
    }, 500);
  }
}
