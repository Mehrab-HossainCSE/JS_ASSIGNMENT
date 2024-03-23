
function findOldestBook(books){
    let mn=Number.MAX_VALUE;
    let res;
    for(let i=0;i<books.length;i++){
        let objYear=books[i].year;
        if(objYear<mn){
            mn=objYear;
            res=books[i];
        }
    }
    return res;
}


function findAuthorWithMostBooks(arr) {
    
    const frequency = {};

    
    let mostFrequent = arr[0].author;
    let maxCount = 0;

    
    for (let i = 0; i < arr.length; i++) {
        
        const element = arr[i].author;

        
        if (frequency[element]) {
            
            frequency[element]++;
        } else {
          
            frequency[element] = 1;
        }

       
        if (frequency[element] > maxCount) {
            mostFrequent = element;
            maxCount = frequency[element];
        }
    }

    return mostFrequent;
}

function findBooksByAuthor(books, author) {
    return books.filter(book => book.author === author);
}
function countBooksByGenre(arr){
    const frequency = {};

    
    

    
    for (let i = 0; i < arr.length; i++) {
        
        const element = arr[i].genre;

        
        if (frequency[element]) {
            
            frequency[element]++;
        } else {
          
            frequency[element] = 1;
        }

       
       
    }
    return frequency;
}
const books = [
    {
    title: "Book 1",
    author: "Author A",
    year: 1990,
    genre: "Science Fiction",
    },
    {
    title: "Book 2",
    author: "Author B",
    year: 1985,
    genre: "Mystery",
    },
    {
    title: "Book 3",
    author: "Author A",
    year: 2005,
    genre: "Science Fiction",
    },
    {
    title: "Book 4",
    author: "Author C",
    year: 1998,
    genre: "Fantasy",
    },
   ];
   console.log("Oldest Book:", findOldestBook(books));
// Output: { title: "Book 2", author: "Author B", year: 1985, genre: "Mystery" }
console.log("Author with Most Books:", findAuthorWithMostBooks(books)); // Output: "Author A" 
console.log("Books by Author A:", findBooksByAuthor(books, "Author A"));// Output: [{ title: "Book 1", author: "Author A", year: 1990, genre: "Science Fiction" }, { title:
//"Book 3", author: "Author A", year: 2005, genre: "Science Fiction" }]
console.log("Count of Books by Genre:", countBooksByGenre(books));
// Output: { "Science Fiction": 2, "Mystery": 1, "Fantasy": 1 }