

let books = []; 
let currentId = 1; 


export function addBook(book) {
    book.id = currentId++;
    books.push(book);
}


export function listBooks() {
    return books;
}

export function searchBooks(query) {
    return books.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
    );
}


export function removeBook(id) {
    books = books.filter((book) => book.id !== id);
}


export { books };
