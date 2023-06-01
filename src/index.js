//variaveis de acesso ao DOM
const titleInput  = document.querySelector(".title")
const authorInput = document.querySelector(".author")
const pagesInput  = document.querySelector(".pages")
const readInput   = document.querySelector(".read")
const submit      =    document.getElementById("submit")
const centeredElement = document.getElementById("centered-element")
const addBook   = document.getElementById("addBook")
const required  = document.querySelectorAll("[required]");
const fixedForm = document.getElementById("fixedForm")
const exit      = document.getElementById("exit");
const overlay   = document.getElementById("overlay")
const library   = document.getElementById("library")
const card      = document.getElementsByClassName("card")


//variavel para armazenar os objetos book
const libraryArray = [];
// funcao para criar o objeto book
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//criar o objeto book baseado no valor do input e adicionar ao array
function addBookTolibraryArray() {
    const newsBook = new book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked)
    libraryArray.push(newsBook)
}


// funcao para animacao do overlay e do #fixedForm adicionando ou removendo classes que tem os estilos predefinidos no css
let slidedIn = false

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





function showBooks() {
    // Criar uma cópia do elemento #fixedForm
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

// funcao para mudar atributos dos clones e adicao de novos atributos
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

}
  


   
// funcao para checar inputs obrigatorios e caso true mostrar o card do livro
const requiring = () => {
    let canShowBooks = true;
    // Iterar sobre todos os elementos de entrada
    const inputs = fixedForm.querySelectorAll('input');
    inputs.forEach(element=>{
        // Verificar se o elemento é obrigatório e se o valor está em branco ou é zero

        if (element.hasAttribute('required') && (!element.value || element.value.trim() === '0')) {
    
            canShowBooks = false; // retornar como false se um elemento obrigatório estiver vazio
        }
    })
    
    // Verificar se todos os elementos obrigatórios estão preenchidos e mostrar os livros
    if (canShowBooks) {
        toggleAnimation();
        addBookTolibraryArray();
        showBooks();
    }
};







// funcao para retornar os inputs de #fixedForm sem valor ao clicar novamente em #addBook
function addBookReset() {
    toggleAnimation()
    required.forEach(element => {
        element.value = ""
    })
    readInput.checked = false
    
}

//event listener para adicionar aparicao de #fixedForm
addBook.addEventListener("click", addBookReset

)

// event listener para sair de #fixedForm
exit.addEventListener("click",()=>{
    toggleAnimation()
    
})

// event listener para ao clicar no overlay executar animacao e  retornar à tela principal
overlay.addEventListener("click",toggleAnimation
)


// eventlistener previnir o submit do form 
fixedForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

submit.addEventListener("click", () => {
    requiring()

})