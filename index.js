const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function  setName (name) {
    linkName.innerText = "Welcome, ";
    let nameInner = document.createElement("span");
    nameInner.innerText = name;
    nameInner.setAttribute("class", "name");
    linkName.appendChild(nameInner);
    return nameInner;
}  

nameInput.addEventListener("change", () => {
    setName(nameInput.value);
});

//text hidding

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
let shown = true;

function toggleText() {
    if(shown){
        btn.innerText ="Show Text";
        text.style.opacity = 0;
    }

    else {
        btn.innerText="Hide Text";
        text.style.opacity= 1;
    }
    shown = !shown
}

btn.addEventListener("click", () => {
    toggleText(); 
});
/*
//image frame loader
const urlInput = document.querySelector("input[name='url']");
const widthInput = document.querySelector("input[name='width']");
const colorInput = document.querySelector("input[name='color']");
const image = document.querySelector("image");

let url = "";
let width = 10;
let color = "#000";

function hideImageOnLoad() {
    image.style.display = "none";
}

function setImage(url, width, color) {
    image.style.display = "block";
    image.style.borderStyle= "solid";
    image.style.backgroundImage = "url(" + url + ")";
    image.style.borderWidth = width + "px";
    image.style.borderColor = color;
}

urlInput.addEventListener("change", () =>{
    url = urlInput.value;
    setImage(url, width, color);
})

widthInput.addEventListener("change", () =>{
    width = widthInput.value;
    setImage(url, width, color);
})

colorInput.addEventListener("change", () =>{
    color = colorInput.value;
    setImage(url, width, color);
})

hideImageOnLoad();
*/