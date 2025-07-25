const items={
    price:100,
    piece:30,
    color:["pink","blue"]
}

const twitterPost={
    username:"@Muskan",
    content:"Wimbeldon",
    likes:2000000,
    reposts:1000000,
    tags:["@123","me"]
}

//Print a value
console.log(twitterPost["content"]);
console.log(twitterPost.content);

//JS converts every literal to string
const obj={
    1:"a",
    2:"b",
    null:"0",
    undefined:"*"
}

//Add and modify the values
const student= {
    name : "muskan",
    age:18,
    marks:98.8,
    city:"Noida"
}
student.city="Mumbai";
console.log(student.city);
student.gender="Female";
console.log(student);
student.marks=99;
console.log(student);
delete(student.marks);
console.log(student);
student.marks=99;
console.log(student);

//Object of objects
const classInfo={
    Muskan :{
        class :"Ft-2",
        rollNo:9,
        subject:"CSE"
    },
    Nisha :{
        class :"Ft-2",
        rollNo:13,
        subject:"EC"
    },
    Nandu :{
        class :"Ft-2",
        rollNo:11,
        subject:"AI"

    }
}

console.log(classInfo.Muskan);

//Array of Objects
const classInfo1=[
    {
        class :"Ft-2",
        rollNo:9,
        subject:"CSE"
    },
    {
        class :"Ft-2",
        rollNo:13,
        subject:"EC"
    },
    {
        class :"Ft-2",
        rollNo:11,
        subject:"AI"

    }
]

console.log(classInfo1[1].class);

//Math Object
console.log(Math.PI);
console.log(Math.abs(-1233.33));
console.log(Math.floor(-12.33));
console.log(Math.ceil(-12.33));
console.log(Math.random());

//Generate number b/w 1 to 10
console.log(num=Math.random());
console.log(num = num*10);
console.log(num =Math.floor(num));
console.log(num);
console.log(num+1);

//Generate a number between 1 to 100
console.log(num=Math.random());
console.log(num = num*100);
console.log(num =Math.floor(num));
console.log(num);
console.log(num+1);

//Generate a number between 1 to 5
console.log(num=Math.random());
console.log(num = num*5);
console.log(num =Math.floor(num));
console.log(num);
console.log(num+1);

//Guess a number between 1 to max
// Get the maximum number and convert it to an integer
const max = parseInt(prompt('Enter a max number:'));

// Generate the random number
const rnum = Math.floor(Math.random() * max) + 1;

// Start the game loop
while (true) {
    let guess = prompt("Guess a number (or type 'quit' to exit):");

    // Check if the user wants to quit (case-insensitive)
    if (guess.toLowerCase() === "quit") {
        console.log("User quit the game.");
        break;
    }
    
    // Convert the string guess to an integer for comparison
    guess = parseInt(guess);

    // Check the guess
    if (guess === rnum) {
        console.log(`Congrats! You guessed it right. The number was ${rnum}.`);
        break; // Exit the loop on correct guess
    } else if (guess < rnum) {
        console.log("Too small! Guess again.");
    } else {
        console.log("Too large! Guess again.");
    }
}

//Generate a number between 1  to 6
console.log(Math.floor(Math.random()*6)+1);

const car={
    name:"SUV" ,
    model: "Sd",
    color:"black"
}

console.log(car.name);

const person={
    name:"sz",
    age:90,
    city:"UK"
}
person.city="New York";
person.country="United States";
console.log(person);