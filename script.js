let library=[]

function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    

}
function addBookToLibrary(){
    const newsBook = new book(title,author,pages,read)
    library.push(newsBook)
}