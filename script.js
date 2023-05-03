const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const pagesInput = document.getElementById("pagesInput")
const readInput = document.getElementById("readInput")
const submit = document.getElementById("submit")
const centerElement = document.getElementById("centered-element")
const addBook = document.getElementById("addBook")
const required = document.querySelectorAll("[required]");

const form= document.getElementsByTagName("form")

const library = [];


function display(displayProperty) {
    centerElement.style.display = displayProperty

}

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

 const requiring= () => {
    required.forEach((element) => {
        if (element.value !== ""&&pagesInput.value>0) {
            display("none") 
             form[0].setAttribute('novalidate', '');
            
            
         
           
        };
    })
    };
  
addBook.addEventListener("click", () => {
    form[0].removeAttribute("novalidate")
    display("grid")
    required.forEach(element=>{
        element.value=""
    })
    readInput.checked=false
    
})
form[0].addEventListener("submit",(event)=>{
    event.preventDefault()
})
submit.addEventListener("click", () =>{
    requiring()
    addBookToLibrary()
    
    
})