
let i = 0;
let myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read === true ? read = "already read" : read = "not read yet";
        this.info = function () {
            console.log(`${title} by ${author}, ${pages} pages, ${read}`)
        }
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false)
const theLotr = new Book('LOTR', 'J.R.R Tolkien', 300, true)

// This function add a book to the array 'myLibrary'
function addBookToLibrary() {
    const newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("read").checked
    )
    myLibrary.push(newBook);
    console.log(myLibrary)
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

// This function create a 'card' and displays the content of the book on it
function displayNewBook() {
    const card = document.createElement('div')
    card.classList.add("card");
    container.appendChild(card);
    const title = document.createElement('span');
    title.classList.add('book-title')
    card.appendChild(title)
    const author = document.createElement('span');
    card.appendChild(author)
    const pages = document.createElement('span');
    card.appendChild(pages)
    const read = document.createElement('span');
    if (document.getElementById("read").checked === true) {
        read.classList.add("checked")
    } else {
        read.classList.add("unchecked")
    }
    card.appendChild(read)
    title.textContent = `"${myLibrary[i].title}"`;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;
    i += 1;
}

const container = document.querySelector('.container')
const newBook = document.querySelector('.newBook')


// When user clicks the button, add the new book.
newBook.addEventListener("click", () => {
    addBookToLibrary();
    displayNewBook();
    resetForm();
});


