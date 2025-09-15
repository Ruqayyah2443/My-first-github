

// let great = prompt("Welcome to the Library! View available books, Borrow a book, Return a book or Exit ");



function library(){
  let availableBooks = ["Educative books", "History book", "Entertainment book", "Geography" ]

  let choice = parseInt(prompt(" Welcome, how can I help you?, enter a number:\n1. View books\n2. Borrow books\n3. Return books \n4. Exit"));
    
    // Book list
    let bookList = ""
  for (let i = 0; i < availableBooks.length; i++ ){
      bookList += (i + 1) + ". " + availableBooks[i] + "\n"
    }
  if (choice === 1){
    
    
    console.log(`Available books:\n ${bookList}`)

   
  }else if(choice === 2){
     let pick =  parseInt(prompt("Available books:\n" + bookList + "\nEnter the number of the book you want:"))
    if (pick >= 1 && pick <= availableBooks.length){

      console.log(`You have borrowed: ${availableBooks[pick-1]}`)
    } else {
      alert("Invalid selection")
    }
    
  }else if (choice === 3){
    let borrowedBooks =["Religious books", "Map graph", "Encyclopedia"]
    let borrowedList = ""
  for (let i = 0; i < borrowedBooks.length; i++ ){
      borrowedList += (i + 1) + ". " + borrowedBooks[i] + "\n"
    }
    let returnBook = parseInt(prompt( `Borrowed books:\n"  ${borrowedList}\n enter the number of book you want to return` ))
   if(returnBook >=1 && returnBook <= borrowedBooks.length){

    let returned = borrowedBooks.splice(returnBook -1, 1)
    console.log(`You have returned: ${returned[0]}`)
    
    // new borrowed book list
    let newBorrowedList = "";
    for (let i = 0; i < borrowedBooks.length; i++) {
      newBorrowedList += (i + 1) + ". " + borrowedBooks[i] + "\n";
    }

    console.log("Updated borrowed books:\n" + newBorrowedList);

   }else{
    console.log("No borrowed book")
   }
   

  }else if (choice === 4){
    console.log("Goodbye")
  }else("Invalid choice, please try again later")
}
library()