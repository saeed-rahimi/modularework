

import { addBook, listBooks, searchBooks, removeBook } from './library.js';
import formatBook from './formatter.js';


addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee' });
addBook({ title: '1984', author: 'George Orwell' });
addBook({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' });


console.log('All Books:');
listBooks().forEach((book) => console.log(formatBook(book)));


console.log('\nSearch Results for "George":');
searchBooks('George').forEach((book) => console.log(formatBook(book)));


console.log('\nRemoving book with ID 2...');
removeBook(2);

console.log('All Books After Removal:');
listBooks().forEach((book) => console.log(formatBook(book)));
