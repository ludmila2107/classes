

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }
  
    fix() {
      this.state = 1.5 * this.state;
    };
  
    set state(state) {
      if (state < 0) {
        this._state = 0;
      } else if (state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
    get state() {
      return this._state;
    }
  
  }
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
    }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
   
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
   
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
   
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
   
  //Задание 2
   
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(nameBook) {
      if (nameBook.state > 30) {
        this.books.push(nameBook);
      }
    }
   
    findBookBy(type, value) {
      const book = this.books.find((book) => book[type] === value);
      return book || null;
    }
   
    giveBookByName(bookName) {
      const findResult = this.books.find((item) => item.name === bookName);
      this.books = this.books.filter((item) => item.name !== bookName);
      return findResult || null;
    }
  }
  

  
