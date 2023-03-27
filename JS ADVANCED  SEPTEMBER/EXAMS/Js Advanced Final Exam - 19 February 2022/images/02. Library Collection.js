class LibraryCollection {

    constructor (capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor){

        if (this.books.length == this.capacity) {

            throw new Error (  'Not enough space in the collection.') ;


        }
        this.books.push({bookName, bookAuthor, payed: false});
        return (`The ${bookName}, with an author ${bookAuthor}, collect.`);

    }

    payBook( bookName ) {

        let bookFound = this.books.find (b => b.bookName == bookName);

        if(bookFound == null){
            throw new Error (  `${bookName} is not in the collection.`) ;


        }

        if(bookFound.payed == true){

            throw new Error (  `${bookName} has already been paid."`) ;

        }

        bookFound.payed = true;

        return `${bookName} has been successfully paid.`;

    }
    removeBook(bookName) {

        let bookFound = this.books.find (b => b.bookName == bookName);
        if(bookFound == null){
            throw new Error (  `The book, you're looking for, is not found.`) ;


        }

        if(bookFound.payed == false){
            throw new Error (  `${bookName} need to be paid before removing from the collection.`) ;


        }

        let index =  this.books.findIndex(b.bookName == bookName);

        this.books.splice(index, 1);



    }

}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));
