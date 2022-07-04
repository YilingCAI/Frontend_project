/* Definition of variables, constant, and calculation*/
let numberOfCats = 2;
let numberOfDogs = 4;
let numberOfAnimal = numberOfCats + numberOfCats;
const numberOfSeasons = 4;
var myDay = 1;
numberOfCats -= 1;
numberOfSeasons++;
numberOfAnimal--; // this is a comment
numberOfAnimal *=3
/* Type of data : number, string, boolean*/
let userIsSignedIn = true;
let userIsAdmin = false;
let firstName = 'Yiling';
let lastName = 'CAI';
let wholeName = firstName + ' ' + lastName;
let myName = `Yiling`;
let salutation = `Bienvenue ${myName}`;
console.log(salutation);

/* Objet paire key -value JSON format */
let myBook = {
    title: 'This Stoiry of Tau',
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable : true
}

/* Acces of the objet data */
let bookTitle = myBook.title;
let bookPages = myBook.numberOfPages;
let bookAuthor = myBook['author'];


/* Create a class instance constructor*/
class Book {
    constructor(title, author, numberOfPages, isAvailable) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isAvailable = isAvailable;
    }
}


let myBook1 = new Book("L'Histoire de la Tau", 'Will Alexendre', 250, true);

/* tableau (array), list ordonne, start at zero index*/

let guests = ["Sarah Kate", "Audrey Simon", "Will Alexendre"];
let firstGuest = guests[0];
let thirdGuest = guests[2];
let undefinedGuest = guests[12];

let howManyGuests = guests.length;
guests.push("Tao Perkigton");  // add an element
guests.unshift("Will Smith"); //addd an element at the beginning of the table
guests.pop() //delete the last element of the table

/*for..in.. for..of... while */
for (let i in guests) {
    console.log(`Bienvenue ${guests[i]}`)
}

for (let i of guests) {
    console.log(`Bienvenue ${i}`)
}

/* if else  switch beak*/
let userloggedIn = true;
if (userloggedIn) {
    console.log("connected!");
} else {
    console.log("failed connection!");
}


/* error tratment try catch(error) */

/* fonction declaration */

function sommeOfTwoNumbers(value1, value2) {
    let sommeReturn = value1 + value2;
    console.log(sommeReturn);
    return sommeReturn;
}

let val = sommeOfTwoNumbers(4 + 5);

/*fonction expression*/
const anotherSommeOfTwoNumbers = (vaue1, value2) => {
    return  console.log(sommeReturn);
}


/* methode of instance  statique*/

class BankAccount{
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalnce() {
        console.log("rest of " + this.balance);
    }
    deposit(amont) {
        console.log("depot" + amont);
        this.balance += amont;
        this.showBalnce();
    }
}

const newAccount = new BankAccount("Will Smith", 50);
newAccount.showBalnce();
newAccount.deposit(30);

/* test unitaire, integration, E2E*/


/* binary research resursion */

const findElement = (array, elementToFind) => {
    for (let element of array) {
        if (element == elementToFind) {
            return true;
        }  
    }
    
    return false;

}


const binarySearch = (array, elementToFind, start, end) => {
    let mid = math.floor((start + end) / 2);
    if (array[mid] === elementToFind) {
        return true;
    }
    
    if (array[mid] < elementToFind) {
        return binarySearch(array, elementToFind, start, mid - 1);
    }

    else {
        return binarySearch(array, elementToFind, mid + 1, start);
    }
    
}

