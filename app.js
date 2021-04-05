// Global variables
const newBook = document.querySelector(".add-book");
const submitForm = document.querySelector("#submit-details");
const closeButton = document.querySelector(".close-bar")

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
// To do
}

function displayBook() {
    let listLength = len(myLibrary);
    for (i = 0; i < listLength; i++) {
        // Some logic that displays the books in a table
    }
}

// New book modal function
const togglePopup = () => {
    document.querySelector(".modal").classList.toggle('modal--hidden');
}

newBook.addEventListener("click", togglePopup);
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    togglePopup();
});
// NOTE: in the future this will need to accept user input; for now pressing enter closes the form and clicking
// submit closes the form as well
closeButton.addEventListener("click", togglePopup)

// Keyboard support for escaping form
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        togglePopup();
    }
})