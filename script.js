let library=[];
const title=document.getElementById("title")
const author=document.getElementById("author")
const pages=document.getElementById("pages")
const read= document.getElementById("read")

function book(title,author,pages,read){
    this.title=title.value;
    this.author=author.value;
    this.pages=pages.value;
    this.read=read.value;   
}

function addBookToLibrary(){
    const newsBook = new book(title,author,pages,read)
    library.push(newsBook)
}
function showBooks(){
    library.forEach(element => {
        console.log(element)
        
    });

}