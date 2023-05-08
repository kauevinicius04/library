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
    if(card.length>0){
        const lastCloneCard=card[card.length-1]
        const inputOfLastCard=lastCloneCard.querySelectorAll("input")
        inputOfLastCard.forEach(element=>{
            if(element.hasAttribute("required"))
            {
            element.removeAttribute("required")
            element.setAttribute("readonly","") }
    }
    )
    
    }
    selectValidation()
    
}
  

// Adicionar o clone modificado a um novo local no DOM
function selectValidation(){
    if (fixedForm.hasAttribute("novalidate")) {
        fixedForm.removeAttribute("novalidate")
    }

}
   

const requiring = () => {
    required.forEach((element) => {
        if (element.value && pagesInput.value > 0) {
            console.log(element)
            centeredElement.classList.replace("slide-in", "fadeOut")
            toggleAnimation()




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