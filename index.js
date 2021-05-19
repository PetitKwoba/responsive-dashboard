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
})

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
})