const titleInput=document.getElementById("titleInput")
const authorInput=document.getElementById("authorInput")
const pagesInput=document.getElementById("pagesInput")
const readInput= document.getElementById("readInput")
const submit=document.getElementById("submit")
const centerElement=document.getElementById("centered-element")
const addBook=document.getElementById("addBook")
const required=document.querySelectorAll("[required]");

const library=[]; 
function display(displayProperty){
    centerElement.style.display=displayProperty

}
function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    const newsBook = new book(titleInput.value,authorInput.value,pagesInput.value,readInput.value)
    library.push(newsBook)
}
addBook.addEventListener("click",()=>{display("grid")})
submit.addEventListener("click",function a (event){
    addBookToLibrary()
    event.preventDefault()})

function showBooks(){
    library.forEach(element => {
        console.log(element)
        
    });

}