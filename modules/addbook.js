/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
import {
  form, title, author, displayArea, list, addNew, contact,
} from './declaration.js';
import Books from './app.js';

// what happens when a person presses submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Check if title and author field is empty or not
  if (title.value === '') {
    alert('Please enter a book title');
  } else if (author.value === '') {
    alert('Please enter a book author');
  } else {
    displayArea.innerHTML = '';
    const book = new Books();
    book.storeData();
  }
});

const bigBook = new Books();
const deleteItem = (id) => {
  bigBook.removeBook(id);
};

window.deleteItem = (id) => {
  bigBook.removeBook(id);
};

if ('cl' === 'clz') {
  deleteItem(1);
}

list.addEventListener('click', () => {
  bigBook.showList();
});
addNew.addEventListener('click', () => {
  bigBook.showNew();
});
contact.addEventListener('click', () => {
  bigBook.showContact();
});
// dates.innerHTML = Date();

window.addEventListener('load', bigBook.displayBooks());