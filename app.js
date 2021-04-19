// Global variables
const addBook = document.querySelector(".add-book");
// const submitForm = document.querySelector("#submit-details");
const closeButton = document.querySelector(".close-bar");
const libraryTable = document.querySelector("#library-display");
const submitButton = document.querySelector("#submit");

// Initial constructor for book objects
function Book(title, author, number_pages, have_read) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.have_read = have_read;
}

// Array in which all book objects will be stored
let myLibrary = [];
// Some tests, to be removed later
// var Book1 = new Book("Flowers for Algernon");
var Book2 = new Book("Flowers for Algernon 2", "Daniel Keyes", 500, "yes");
myLibrary.push("Flowers for Algernon")
myLibrary.push("Test2")
myLibrary.push(Book2)
// removeBook("Flowers for Algernon")
console.log(myLibrary)
// addBooktoLibrary("Flowers for Algernon")
// console.log(JSON.stringify(myLibrary))

// Function to add book to my library; first checks if book title being added already exists
function addBooktoLibrary(newBook) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === newBook.title) {
            alert("Book already exists! Please try again.");
            return false;
        }
    }
    myLibrary.push(newBook);
}

// Function to display books in the library
function displayBook(book) {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === book) {
            return book;
        }
    }
}

// Function to remove book from the library
function removeBook(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === book.title) {
            myLibrary.splice(i,1)
        }
    }
}

// New book modal function
const togglePopup = () => {
    document.querySelector(".modal").classList.toggle('modal--hidden');
}

addBook.addEventListener("click", togglePopup);
submitButton.addEventListener("click", createBookFromForm);
// submitForm.addEventListener("submit", (e) => {
//     createBookFromForm();
//     // togglePopup();
// });

// NOTE: in the future this will need to accept user input; for now pressing enter closes the form and clicking
// submit closes the form as well
closeButton.addEventListener("click", togglePopup)

// Keyboard support for escaping form
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        togglePopup();
    }
})

// Get form input
function createBookFromForm() {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var numberOfPages = document.querySelector("#number-of-pages").value;
    var haveRead = document.querySelector("#have-read").checked;
    var newBook= new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(newBook);
    // var displayTitle = document.querySelector("#title-response");
    // displayTitle += title;
    libraryTable.innerHTML = createTable();
}

// Add data to the table we create
function createTable() {    
    var html = "<table>";
    console.log(myLibrary);
    myLibrary.forEach(function(item) {
        html += "<tr>";
        html += "<td>" + item.title + "</td>"
        html += "<td>" + item.author + "</td>"
        html += "<td>" + item.number_pages + "</td>"
        html += "<td>" + item.have_read + "</td>"
        html += "<tr>";
    });
    html += "</table>";
    return html;
}