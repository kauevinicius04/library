const titleInput = document.querySelector(".title")
const authorInput = document.querySelector(".author")
const pagesInput = document.querySelector(".pages")
const readInput = document.querySelector(".read")
const submit = document.getElementById("submit")
const centeredElement = document.getElementById("centered-element")
const addBook = document.getElementById("addBook")
const required = document.querySelectorAll("[required]");
const fixedForm = document.getElementById("fixedForm")
const exit = document.getElementById("exit");
const overlay = document.getElementById("overlay")
const library= document.getElementById("library")
const card = document.getElementsByClassName("card")

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
const cloneCard=fixedForm.cloneNode(true)
cloneCard.classList = "card"; 
cloneCard.removeAttribute("id");
cloneCard.lastElementChild.remove()
cloneCard.addEventListener("submit", (event) => {
        event.preventDefault()
    })
library.appendChild(cloneCard);
change()
 
  };


function change(){
        const lastCloneCard=card[card.length-1];
        const inputOfLastCard=lastCloneCard.querySelectorAll("input");
        const changeExit=lastCloneCard.querySelector("#exit")
        changeExit.removeAttribute("id")
        changeExit.classList.add("remove")
        const remove= document.querySelectorAll(".remove")
        remove.forEach(element=>{
            element.addEventListener("click",()=>{
                const closestCard = element.closest(".card")
                closestCard.remove()
            })
        })
        inputOfLastCard.forEach(element=>{
            element.classList.add("readOnlyInput")
            if(element.hasAttribute("required"))
            {
            element.removeAttribute("required")
            element.setAttribute("readonly","") }
    
    })

    selectValidation()  
}
  

// Adicionar o clone modificado a um novo local no DOM
function selectValidation(){
    if (fixedForm.hasAttribute("novalidate")) {
        fixedForm.removeAttribute("novalidate")
    }
}
   

const requiring = () => {
    let canShowBooks = true;
    // Iterar sobre todos os elementos de entrada

    const inputs = fixedForm.querySelectorAll('input');
    inputs.forEach(element=>{
        // Verificar se o elemento é obrigatório e se o valor está em branco ou é zero

        if (element.hasAttribute('required') && (!element.value || element.value.trim() === '0')) {
    
            canShowBooks = false; // definir como false se um elemento obrigatório estiver vazio
        }
    })
    
    // Verificar se todos os elementos obrigatórios estão preenchidos e mostrar os livros
    if (canShowBooks) {
        toggleAnimation();
        addBookTolibraryArray();
        showBooks();
    }
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
        addBook.style.transform="scale(0)"
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
    
    required.forEach(element => {
        element.value = ""
    })
    readInput.checked = false
    

}





fixedForm.addEventListener("submit", (event) => {
    event.preventDefault()
})
submit.addEventListener("click", () => {
    selectValidation()
    requiring()



})