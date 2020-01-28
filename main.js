let glv_info  = document.getElementById("glavKeyInfo");
let tbl_info  = document.querySelector(".keyInfo");
let e_keyCode = document.getElementById("e.keyCode");
let e_key     = document.getElementById("e.key");
let e_code    = document.getElementById("e.code");

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 32) {
    glv_info.innerHTML = "Space";
    e_key.innerHTML = "Space";
  }
  else if (event.keyCode == 38) {
    glv_info.innerHTML = "ArrowUp &uarr;";
    e_key.innerHTML = "ArrowUp &uarr;";
    e_code.innerHTML = "ArrowUp &uarr;";
  }
  else if (event.keyCode == 37) {
    glv_info.innerHTML = "ArrowLeft &larr;";
    e_key.innerHTML = "ArrowLeft &larr;";
    e_code.innerHTML = "ArrowLeft &larr;";
  }
  else if (event.keyCode == 40) {
    glv_info.innerHTML = "ArrowDown &darr;";
    e_key.innerHTML = "ArrowDown &darr;";
    e_code.innerHTML = "ArrowDown &darr;";
  }
  else if (event.keyCode == 39) {
    glv_info.innerHTML = "ArrowRight &rarr;";
    e_key.innerHTML = "ArrowRight &rarr;";
    e_code.innerHTML = "ArrowRight &rarr;";
  }
  else {
    glv_info.innerHTML = event.key;
    e_key.innerHTML = event.key;
    e_code.innerHTML = event.code;
  }

  e_keyCode.innerHTML = event.keyCode;
  tbl_info.style.display = "block";

  console.log(event.keyCode + " | " + event.key + " | " + event.code);
});