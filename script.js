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


const library = [];
let slidedIn = false

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newsBook = new book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
    library.push(newsBook)
}



function showBooks() {
    library.forEach(element => {
        console.log(element)

    });

}

const requiring = () => {
    required.forEach((element) => {
        if (element.value !== "" && pagesInput.value > 0) {
            centeredElement.classList.replace("slide-in", "fadeOut")
            toggleAnimation()
            addBookToLibrary()
            form.setAttribute('novalidate', '');




        };
    })
};

addBook.addEventListener("click", addBookReset

)
exit.addEventListener("click",()=>{
    toggleAnimation()
    form.setAttribute('novalidate', '')
})








function toggleAnimation() {
    if (slidedIn === false) {
        centeredElement.classList.add("slide-in")
        body.style.backgroundColor = "rgba(0,0,0,0.5)"
        addBook.style.transform="scale(0)"
        slidedIn=true
        if(centeredElement.classList[2]==="fadeOut"){ 
        centeredElement.classList.replace("fadeOut","slide-in")
    }

    }
    else if(slidedIn===true){
        centeredElement.classList.replace("slide-in","fadeOut")
            body.style.backgroundColor = "initial"
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