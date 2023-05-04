const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const pagesInput = document.getElementById("pagesInput")
const readInput = document.getElementById("readInput")
const submit = document.getElementById("submit")
const centeredElement = document.getElementById("centered-element")
const addBook = document.getElementById("addBook")
const required = document.querySelectorAll("[required]");
const form = document.querySelector("Form");
const body = document.querySelector("Body");
const exit = document.getElementById("exit");
const overlay = document.getElementById("overlay")
const library= document.getElementById("library")


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
        const newDiv = document.createElement("div");
        const lastArray=libraryArray[libraryArray.length-1]

        for (let i = 0; i < book.length-1; i++) {
             const newP = document.createElement("p")
            newDiv.appendChild(newP)
            switch (i) {
                case 0:
                    newP.id="titleInput"
                newP.textContent=lastArray.title
                    break;
                case 1:
                    newP.id="authorInput"
                    newP.textContent=lastArray.author
                case 2:
                    newP.id="pagesInput"
                    newP.textContent=lastArray.pages
                default:
                    break;
            }
            
        }
        
       
        newDiv.classList.add("card")
        
        library.appendChild(newDiv)
        
    
   
}

const requiring = () => {
    required.forEach((element) => {
        if (element.value !== "" && pagesInput.value > 0) {
            centeredElement.classList.replace("slide-in", "fadeOut")
            toggleAnimation()
            
            form.setAttribute('novalidate', '');




        };
    })
    addBookTolibraryArray()
};

addBook.addEventListener("click", addBookReset

)
exit.addEventListener("click",()=>{
    toggleAnimation()
    form.setAttribute('novalidate', '')
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
    if (form.hasAttribute("novalidate")) {
        form.removeAttribute("novalidate")
    }
    required.forEach(element => {
        element.value = ""
    })
    readInput.checked = false
    

}





form.addEventListener("submit", (event) => {
    event.preventDefault()
})
submit.addEventListener("click", () => {
    requiring()


})