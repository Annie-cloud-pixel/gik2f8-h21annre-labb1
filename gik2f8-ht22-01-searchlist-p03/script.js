'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  BookList.length > 0 && searchField.value && root.insertAdjacentHTML
  ('beforeend', BookList(bookList));
}

 function handleMouseover(li){ 
}


function renderBookInformation(FoundBookId, x, y){
  let bookInfo = `<div ID="bookInfo" class="absolute w-80 h-100 gap-4 
  p-10  bg-pink-300 border-black-10 m-10 top-[${
    y + 10
  }px] left-[${x + 10}px]">
      <h2 class="font-bold text-2xl"> ${FoundBookId.author}</h2>    
      <p class="m-2 text-black text-1xl font-semibold"> Title: ${FoundBookId.title}</p>
      <p class="m-2 text-black text-1xl font-semibold"> Pages: ${FoundBookId.pages}</p>
      <p class="m-2 text-black text-1xl font-semibold"> Release date: ${FoundBookId.releaseDate}</p>
      <img src="${FoundBookId.coverImage}" alt="Image is missing" width="200px" height="220px">
        
</div>`
      root.insertAdjacentHTML('beforebegin', bookInfo);
}



function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  for (let bookId of document.getElementsByClassName("book-list__item")){
    bookId.addEventListener("mouseenter", (e) => {
      
    getOne(bookId.getAttribute("id"))
      
    })


  bookId.addEventListener("mouseleave", () => {
  bookInfo && bookInfo.remove();
      
    })
  }
}