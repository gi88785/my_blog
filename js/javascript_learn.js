"use strict"; // Forces the execution of the code in modern JavaScript standard
console.log("Hello, World!");
console.log("My Name is GTBANG");
console.log("I was born in 1996");
console.log(1996);
console.log("In Edea", "At the Clinic of Mpuma");
console.log("Gilles Theodore", "Bang", "(1996)");
console.log(" Gilles Theodore","\n","Bang","\n","(1996)");
console.log("Gilles Theodore" + " Bang" + " (1996)");

let height1 = 178;
console.log(height1);
let height2 = height1;
console.log(height2);
let weight = 77;
console.log(weight);

let bmi = "slightly overweighted"
console.log(bmi);

let steps = 100;
console.log(steps);
steps = 120; 
console.log(steps);
steps = steps + 200;
console.log(steps);

let greeting = "Hello!";
let counter = 100;
console.log(greeting);
greeting = 1;
console.log(greeting);
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting);
const Greeting = "Hello!";

console.log("let's begin:"); // -> let's begin:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and again:"); // -> and again:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and once more:"); // -> and once more:
console.log("Hello"); // -> Hello
console.log("World"); // -> World

function testFunction() {
    console.log("Hello World!");
}

console.log("let's begin:");
testFunction();
console.log("and again:");
testFunction();
console.log("and once more:");
testFunction();

var globalGreeting = "Good";

function globalGreeting_Function() {
    var localGreeting = "Morning ";  
    console.log("function:", globalGreeting, localGreeting);
}

globalGreeting_Function();

console.log("main program:");
console.log(globalGreeting);
//console.log(localGreeting); // -> Trying to demonstrate that 'var' declarations can also be local in JS.

let flowerRose_Price  = 8;  let flowerRose_Number  = 70;  let flowerRose_Total  = flowerRose_Number  * flowerRose_Price;
let flowerLily_Price  = 10; let flowerLily_Number  = 50;  let flowerLily_Total  = flowerLily_Number  * flowerLily_Price;
let flowerTulip_Price = 2;  let flowerTulip_Number = 120; let flowerTulip_Total = flowerTulip_Number * flowerTulip_Price;

console.log("Rose  - unit price:", flowerRose_Price, " quantity:", flowerRose_Number, " value:", flowerRose_Total);
console.log("Lily  - unit price:", flowerLily_Price, "quantity:", flowerLily_Number, " value:", flowerLily_Total);
console.log("Tulip - unit price:", flowerTulip_Price, " quantity:", flowerTulip_Number, "value:", flowerTulip_Total);
console.log("Total:", flowerRose_Total + flowerLily_Total + flowerTulip_Total);

flowerRose_Number = flowerRose_Number - 20;
flowerLily_Number = flowerLily_Number - 30;

const flowerRose_Price2  = 8; let flowerRose_Total2  = flowerRose_Number  * flowerRose_Price2;
const flowerLily_Price2  = 10; let flowerLily_Total2  = flowerLily_Number  * flowerLily_Price2;
const flowerTulip_Price2 = 2; let flowerTulip_Total2 = flowerTulip_Number * flowerTulip_Price2;

console.log("Rose  - unit price:", flowerRose_Price2, " quantity:", flowerRose_Number, " value:", flowerRose_Total2);
console.log("Lily  - unit price:", flowerLily_Price2, "quantity:", flowerLily_Number, " value:", flowerLily_Total2);
console.log("Tulip - unit price:", flowerTulip_Price2, " quantity:", flowerTulip_Number, "value:", flowerTulip_Total2);
console.log("Total:", flowerRose_Total2 + flowerLily_Total2 + flowerTulip_Total2);

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
let continueLoop = true;

console.log(false);
console.log(typeof false);
console.log(isDataValid);
console.log(typeof isDataValid);

let year = 1990;
console.log(typeof year);
console.log(typeof 1991);

let name4 = "Alice";
console.log(typeof name4)
console.log(typeof "Bob");

let typeOfYear = typeof year;
console.log(typeOfYear);
console.log(typeof typeOfYear);

let a = 1 / 0;
let bx = -Infinity;

console.log(a);
console.log(bx);
console.log(typeof a);
console.log(typeof bx);

let sx = "it's definitely not a number";
let nx = sx * 10;
console.log(nx);
console.log(typeof nx);

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);
console.log(typeof big);

console.log(big2);
console.log(7n / 4n);

console.log("test console");
console.time();
console.timeEnd();

let river = "Mekong";
let character = river.charAt(2);
console.log(character);

let str = "java script language";

console.log(str.length);
console.log('test'.length);

console.log(str.charAt(0));
console.log('abc'.charAt(1));

console.log(str.slice(0, 4));
console.log('test'.slice(1, 3));

console.log(str.split(' '));
console.log('192.168.1.1'.split('.'));

let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;

console.log('${b1} [${typeof b1}]');
console.log('${b2} [${typeof b2}]');
console.log('${n1} [${typeof n1}]');
console.log('${n2} [${typeof n2}]');
console.log('${bi1} [${typeof bi1}]');
console.log('${bi2} [${typeof bi2}]');
console.log('${s1} [${typeof s1}]');
console.log('${s2} [${typeof s2}]');
console.log('${u1} [${typeof u1}]');

let b = Boolean( BigInt(Number("1234")));
console.log('${b} [${typeof b}]');

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let bc = Boolean(bi);
console.log('${bc} [${typeof bc}]');

let by = true + false;
let na = 100 + 200;
let bt = 100n + 200n;
let as = "He" + "llo";
let u = undefined + undefined;

console.log('${by} [${typeof by}]');
console.log('${na} [${typeof na}]');
console.log('${bt} [${typeof bt}]');
console.log('${as} [${typeof as}]');
console.log('${u} [${typeof u}]');
let b7 = true + 100;
let b9 = true + "100";
let n21 = 100 + true;
let n3 = 100 + "200";
let bi3 = 100n + "200";
let s13 = "100" + 200;
let s22 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log('${b7} [${typeof b7}]');
console.log('${b9} [${typeof b9}]');
console.log('${n21} [${typeof n21}]');
console.log('${n3} [${typeof n3}]');
console.log('${bi3} [${typeof bi3}]');
console.log('${s13} [${typeof s13}]');
console.log('${s22} [${typeof s22}]');
console.log('${s3} [${typeof s3}]');
console.log('${s4} [${typeof s4}]');
console.log('${s5} [${typeof s5}]');
console.log('${s6} [${typeof s6}]');

const str1 = 42 + +"1";
console.log(str1);

let age = 32;
age = age / 10;
console.log(typeof age);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);

days[0] = "Sunday";
console.log(days[0]);

let emptyArray = [];
console.log(emptyArray[0]);

let animals = [];
console.log(animals[0]);

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

let values = ["Test", 7, 12.3, false];

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name);
console.log(users[1].age);
console.log(users);
console.log(user1);
console.log(user2);

users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}

console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);

console.log(typeof days);
let day7 = "Sunday";

console.log(typeof days);
console.log(typeof day7);

console.log(days instanceof Array);
console.log(day7 instanceof Array);

console.log(names.length);

names[5] = "Amelia";
console.log(names.length);

console.log(names);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);

console.log(names[0].indexOf("Mateo"));
console.log(names[0].indexOf("Victor"));
console.log(names[0].indexOf("Mia"));

console.log(names.length);

names.push("Amelia");
console.log(names.length);
console.log(names);

console.log(names.indexOf("Mateo"));
console.log(names.indexOf("Victor"));

console.log(names.length);

let nameA = names.pop();
console.log(names.length);
console.log(nameA);
console.log(names);

let nameB = names.shift();
console.log(names.length);
console.log(nameB);
console.log(names);

names.reverse();
console.log(names);
console.log("New Begin");
let n10 = names.slice(2);
console.log(n10);

let n20 = names.slice(1,3);
console.log(n20); 

let n30 = names.slice(0, -1);
console.log(n30);

let n40 = names.slice(-1);
console.log(n40);

console.log(names);
console.log("New world");

let otherNames1 = ["William", "Jane"];
let otherNames2 = ["Viktor", "Matheus"];
names = names.concat( otherNames1);
//names = names[2].concat( otherNames2);

console.log(otherNames1);
console.log(names);

console.log("Task Arrays, chapter 2");

let oTrain =[ 
    {
        cStarting_Station: "Lusenbrink",
        cEnd_Station: "Gevelberg HBF",
        cTicket_price: 2.6
    }
];

console.log(oTrain);
console.log("Ticket from:", oTrain[0].cStarting_Station);
console.log("Ticket to:", oTrain[0].cEnd_Station);
console.log("Ticket price:", oTrain[0].cTicket_price);

let oPerson = {};
oPerson.Firstname = "Johnny";
oPerson.Lastname = "Stenkovic";
console.log(oPerson.Firstname, oPerson.Lastname);

let aBooks = [ 
    {
        cTitle:"understanding JS", 
        cAuthor: "Pattrick Mckayles",
        nPages: 257
    },
    {
        cTitle: "beginning JS(2015)", 
        cAuthor: "zacharia Malachie",
        nPages: 789 
    },
    {
        cTitle: "Programming in JS for dummies", 
        cAuthor: "Antoine Sebastian",
        nPages: 237
    }
];

let oNewBook = {
    cTitle: "Learning JS Design Patterns",
    cAuthor: "Addy Osmani",
    nPages: 254
};

aBooks.push(oNewBook);
console.log(aBooks.length);
console.log(aBooks[0].cTitle);
console.log(aBooks[1].cTitle);
console.log(aBooks[2].cTitle);
console.log(aBooks[3].cTitle);

let aSelectedBooks = aBooks.slice(-2);
console.log(aSelectedBooks);
console.log(aBooks);

aBooks.shift();
console.log(aBooks.length);
console.log(aBooks[0].cTitle);
console.log(aBooks[1].cTitle);
console.log(aBooks[2].cTitle);

console.log(aBooks[0].nPages + aBooks[1].nPages + aBooks[2].nPages);

console.log(2 * 3 + 1);  
console.log(2 ** 4);
console.log(5 * 1);
console.log(5 / 1);
console.log(8 ** 2 - 5 ** 2);

console.log(4 * 5 == 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 > 4);

console.log(true != false);  
console.log(false == false);  
console.log(false || false || true);  
console.log(true || false && false && true);
console.log(true + false - false && true);

let user = {
    name: "Alice",
    age: 38
};

console.log(user.age); 
delete user.age;
console.log(user);

console.log("From Here On, I use alert boxes!");

//alert("Hello, World!")
//window.alert("Hello, World! for the second time");

//alert(4 * 7);
//alert(true);

//alert("text 1", "text 2"); // only "text 1" will be displayed

//let decision = window.confirm("Is it OK?"); // It is not obligatory to write 'window.' infront of it.
//console.log(decision);

//let remove = window.confirm("Remove all data?");
//let message = remove ? "Deleting Data" : "Cancelled" // Using ternary: if true then, then Deleting Data, vice versa)
//console.log(message);

//let namex = window.prompt("What is your name?", "John Doe");
//namex = namex ? namex : "anonymous";

//let agex = prompt("Hello " + namex + " how old are you?");
//alert(namex + " is " + agex + " years old");

//let width = prompt("Volume of the box, enter width", 0);
//let height = prompt("Volume of the box, enter height", 0);
//let length = prompt("Volume of the box, enter length", 0);
//let volume = width * height * length;
//alert(`Calculated box volume is ${volume}`);

console.log("abcd" > "Abcd");
let lpt1 = 10;
let lpt2 = ++lpt1;
console.log(lpt1);
console.log(lpt2);

/*
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
*/

/*
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
*/

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

//if (userAge > 21) {
//    if (cartValue >= 300 || points >= 500) {
//        shippingCost = 0;
//    }
//}
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}
console.log(shippingCost);

/*
let number = prompt("Enter a number", 0);

if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}
*/

/*
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
*/

/*
let nEnterNr = prompt("Enter a number:", 0);
if (nEnterNr > 90 && nEnterNr < 110){
    window.alert("bingo!");
}
else{
    window.alert("miss");
}

let messsage = (nEnterNr > 90 && nEnterNr < 110) ? "Bingo!" : "Miss!";
console.log(messsage);
*/

/*
let firstNumber = Number(prompt("Enter first number", 0));
let secondNumber = Number(prompt("Enter second number", 0));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);
*/

let nXX = 0;
while(nXX < 121) {
    console.log(nXX);
    nXX += 10;
}
/*
let isOver = false;
let counterx = 1;

while (isOver != true) {
    let continueLoop = confirm(counterx++ + " Continue the loop?");
    console.log(continueLoop);
    isOver = continueLoop === true ? false : true;
    //counterx = counterx + 1;
}
*/

/*
let isOver;
let counterx = 1;

do {
    isOver = confirm(counterx++ + " Continue the loop?");
    console.log(isOver);
} while (isOver);
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
 
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
*/
/*
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
let valuesx = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < valuesx.length; i++) {
    sum += valuesx[i];
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------");
    console.log(valuesx[i]);
    console.log(i);
    console.log(sum);
}
console.log(sum);
*/

/*
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
let namess = [];
let isOvers = false;
while (!isOvers) {
    let name = prompt("Enter another name or press cancel.");
    if (name !== null){
        if (name !== ""){
            namess.push(name);
            console.log(isOvers);
            console.log(name);
        } else {
        isOvers = true;
        console.log(isOvers);
        console.log(name);
        }
    }else {
        isOvers = true;
        console.log(isOvers);
        console.log(name);
    }
}

for (let i = 0; i < namess.length; i++){
    console.log(namess[i]);
}
*/

console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
let valuess = [10, 30, 50, 100];

for (let i = 0; i < valuess.length; i++) {
    console.log(valuess[i]);
}

for (let i = valuess.length - 1; i > 0; i--) {
    console.log(valuess[i]);
}

for (let i = 0; i < valuess.length; i += 2) {
    console.log(valuess[i]);
}

let sum = 0;
for (let number of valuess) {
    sum += number;
}
console.log(sum);

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(city.name + city.population);
    }
}

/*
let z = (prompt("Enter the first number "));
let aT = (prompt("Enter the last number "));

if (z > aT){
    for(let zT = z; zT >= aT; zT -= 10){
        console.log(zT);    
    }
}else{
    for(let zT = aT; zT >= z; zT -= 10){
        console.log(zT);    
    }   
}
*/

let numbersT = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
let NumberT

for(let ai = 0; ai < numbersT.length; ai +=1){
    if(/*numbersT[ai]%2 === 0 && */numbersT[ai] > 10 && numbersT[ai] < 60){
        console.log(numbersT[ai]); 
    }   
}
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
for (NumberT of numbersT) {
    if(NumberT % 2 === 0){
        console.log(NumberT);
    }
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
    if (NumberT > 10 && NumberT < 60) {
        console.log(NumberT);
    }  
}

console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
/*
let oMovie = [];

do{ 
    let cTitel = prompt("Enter the name of the movie");
    let cRating = prompt("Enter the rating of the movie from www.imdb.com");

    if(cTitel === null || cRating === null){
        alert("thank You very much")
        break
    }else if(cTitel == "" || cRating == ""){
        alert("Error!, for every movie, the rating and the titel should be entered!")
        break
    }else if(cRating === NaN){
        alert("A number i supposed to be entered for the rating")
        break
    }else{
        oMovie.push({
            cTitel: cTitel,
            cRating: cRating
        });    
    }
}while (true);

console.log("All with ratings under 7:");
for (let movie of oMovie) {
    if (movie.cRating < 7) {
        console.log(movie.cTitel + " (" + movie.cRating + ")");
    }
}

console.log("All with ratings over 7:");
for (let movie of oMovie) {
    if (movie.cRating >= 7) {
        console.log(movie.cTitel + " (" + movie.cRating + ")");
        break;
    }
}
*/

let oVessel = {
    LATITUDE : 40.07288,
    LONGITUDE : 154.48535, 
    COURSE : 285.6, 
    SPEED : 14.0, 
    IMO : 9175717, 
    NAME : "MARENO"
}

for (let key in oVessel) {
    console.log(key + " -> " + oVessel[key]);
}

let Name1 = "Maxwell Wright"; let Name2 = "Raja Villarreal"; let Name3 = "Helen Richards";
let Phone1 = "(0191) 719 6495"; let Phone2 = "0866 398 2895"; let Phone3 = "0800 1111";
let Email1 = "Curabitur.egestas.nunc@nonummyac.co.uk"; let Email2 = "posuere.vulputate@sed.com"; let Email3 = "libero@convallis.edu";
console.log(Name3, "'" + Phone3 + "'", Email3);

console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");
/*
let aContacts = [
    {
        cName: "Maxwell Wright",
        cPhone: "(0191) 719 6495",
        cEmail:"Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        cName: "Raja Villarreal",
        cPhone: "0866 398 2895",
        cEmail: "posuere.vulputate@sed.com"
    },
    {
        cName: "Helen Richards",
        cPhone: "0800 1111",
        cEmail: "libero@convallis.edu"
    }
];

let oNewContact = {
    cName: "Maisie Haley",
    cPhone: "0913 531 3030",
    cEmail: "risus.Quisque@urna.ca" 
};

aContacts.push(oNewContact);

let oNewContact2 = {}
let last = aContacts.length - 1;

let Choose = prompt("Enter: \nx : For showing any present contacts \n l : For showing the last contact \nn : For adding a new contact \na : for showing all the contacts \nq : to exit the program");
while(Choose != "q"){
    if (!Number.isNaN(Choose) && Choose < aContacts.length && Choose !== 0){
        console.log(aContacts[Choose-1]);
    }
    else if(!Number.isNaN(Choose) && Choose > aContacts.length){
        console.log("There are not that many contacts in the contact list yet"); 
    }else{
        switch (Choose){
            case "x":
                let chasex = prompt("there are currently " +  aContacts.length + " contacts in the contact list." + "\nEnter the key number of the contact you want" + " \nEnter 'e' to exit to mainscreen");
                //console.log(!Number.isNaN(chasex));
                //console.log(chasex <= aContacts.length);
                //console.log(chasex !== 0);
                if (!Number.isNaN(chasex) && chasex <= aContacts.length && chasex !== 0){
                    console.log(aContacts[chasex-1]);
                    break
                }else if (chasex == "e"){
                    window.history.back();
                }else{
                    console.log("the entered number is not valid");
                    break
                }
            case "f":
                console.log(aContacts[0]);
                break
            case "a":
                for(let i = 0; i < aContacts.length; i +=1){
                    console.log(aContacts[i]); 
                    if(i == aContacts.length - 1 ){
                        chasexs = prompt("Enter e to exit")
                        if (chasexs == "e"){
                            console.log(aContacts[chasex-1]);
                            break
                        }
                    } 
                }
            case "l":
                console.log(aContacts[last]);
                break
            case "n":
                oNewContact2.cName = prompt("Name of user, enter cName");
                oNewContact2.cPhone = prompt("Tel of user, enter cPhone");
                oNewContact2.cEmail = prompt("Email of user, enter cEmail");
    
                console.log(typeof(oNewContact2.cName)); 
                console.log(typeof(oNewContact2.cPhone)); 
                console.log(typeof(oNewContact2.cEmail));      
                //console.log(oNewContact2.cPhone.values);
    
                console.log(oNewContact2.cName);
                console.log(oNewContact2.cPhone); 
                console.log(oNewContact2.cEmail);
        
                if (oNewContact2.cName == "" || oNewContact2.cPhone == "" || oNewContact2.cEmail == ""){
                    console.log("Please Enter all needed variables");    
                }else{
                    aContacts.push(oNewContact2); 
                }
                break
            default:
                console.log("nothing found");     
        }
    }
}
console.log(aContacts);
*/