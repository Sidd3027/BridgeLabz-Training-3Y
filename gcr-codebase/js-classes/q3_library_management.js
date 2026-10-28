// Q3: Library Management System (Classes + Objects)
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
    new Book("Atomic Habits", "James Clear", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(`${book.title} — ${book.author} (${book.isbn})`));

const requestedISBN = "ISBN002";
const requestedBook = books.find(book => book.isbn === requestedISBN);

if (requestedBook && requestedBook.issueBook()) {
    console.log(`Issued: ${requestedBook.title}`);
} else {
    console.log("Book not found or already issued.");
}
