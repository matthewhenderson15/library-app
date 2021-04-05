// Global variables
const newBook = document.querySelector("add-book");
const popupForm = document.querySelector("popup-form");

// Initial constructor for book objects
function Book(title, author, number_pages, have_read) {
    this.title = title;
    this.author = author;
    this.number_pages = number_pages;
    this.have_read = have_read;
}

// Array in which all book objects will be stored
let myLibrary = [];



// Function to add book to my library
function addBookToLibrary() {

}

function displayBook() {
    let listLength = len(myLibrary);
    for (i = 0; i < listLength; i++) {
        // Some logic that displays the books in a table
    }
}

// New book pop-up
newBook.addEventListener("click", addBookToLibrary);