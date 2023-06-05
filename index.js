let front = document.querySelector(".front");
let back = document.querySelector(".back");

let btn = document.querySelector(".on");

btn.addEventListener("click", () =>{
    front.style.display = "none"
    back.style.display = "block"
})