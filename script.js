const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const pagesInput = document.getElementById("pagesInput")
const readInput = document.getElementById("readInput")
const submit = document.getElementById("submit")
const centeredElement = document.getElementById("centered-element")
const addBook = document.getElementById("addBook")
const required = document.querySelectorAll("[required]");
const fixedForm = document.getElementById("fixedForm")
const exit = document.getElementById("exit");
const overlay = document.getElementById("overlay")
const library= document.getElementById("library")
const card = document.querySelector(".card")


const libraryArray = [];

let slidedIn = false

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookTolibraryArray() {
    const newsBook = new book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
    libraryArray.push(newsBook)
}



function showBooks() {
        // Criar uma cópia do elemento original
let cloneCard = centeredElement.cloneNode(true);

// Remover o atributo "id" e a classe do clone
cloneCard.removeAttribute("id");
cloneCard.classList = "card";

// Adicionar o clone modificado a um novo local no DOM

library.appendChild(cloneCard);
       
        
    
   
}

const requiring = () => {
    required.forEach((element) => {
        if (element.value !== "" && pagesInput.value > 0) {
            centeredElement.classList.replace("slide-in", "fadeOut")
            toggleAnimation()
            
            fixedForm.setAttribute('novalidate', '');




        };
    })
    addBookTolibraryArray()
};

addBook.addEventListener("click", addBookReset

)
exit.addEventListener("click",()=>{
    toggleAnimation()
    fixedForm.setAttribute('novalidate', '')
})
overlay.addEventListener("click",toggleAnimation
)







function toggleAnimation() {
    
     if (slidedIn === false) {
        centeredElement.classList.add("slide-in")
        overlay.classList.add("active")
        addBook.style.transfixedForm="scale(0)"
        slidedIn=true
        if(centeredElement.classList[0]==="fadeOut"){ 
        centeredElement.classList.replace("fadeOut","slide-in")
    }

    }
       
    else if(slidedIn===true){
        centeredElement.classList.replace("slide-in","fadeOut")
            overlay.style = "initial"
            overlay.classList.remove("active")
            addBook.style="initial"
            slidedIn=false
    }
    

}






function addBookReset() {
    toggleAnimation()
    if (fixedForm.hasAttribute("novalidate")) {
        fixedForm.removeAttribute("novalidate")
    }
    required.forEach(element => {
        element.value = ""
    })
    readInput.checked = false
    

}





fixedForm.addEventListener("submit", (event) => {
    event.preventDefault()
})
submit.addEventListener("click", () => {
    requiring()


})