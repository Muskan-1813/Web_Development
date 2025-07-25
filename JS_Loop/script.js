// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// console.log("Odd numbers:");
// for(let i=1;i<=15;i=i+2){
//        console.log(i);
// }

// console.log("Even numbers:");
// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

// // console.log("Table of 5:");
// // for(let i=5;i<=50;i=i+5){
// //     console.log(i);
// // }

// let n=prompt("Enter your number:");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// //Nested Loops
// for(let i=1;i<=3;i++){
//     console.log(`Outer loop ${i}`);
//       for(let j=1;j<=3;j++){
//         console.log(j);
//       }
// }

// //while loops
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// //Guess a favourite movie
// let favourite="Saiyaara";
// let guess=prompt("Guess a movie");
// while((guess!=favourite)&&(guess!="quit")){
//     prompt("Guess again");
// }

// if(guess==favourite){
//     console.log("You guessed right");
// }else{
//     console.log("quit");
// }


// //Traversing array 
let heroes=[
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
]

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i]);
    for(let j =0;j<heroes[i].length;j++){
        console.log(j,heroes[i][j]);
    }
}


//For of loop

let fruits =["Apple", "Banana", "Mango"];
for(fruit of fruits){
    console.log(fruit);
}
for(char of "Muskan Kumari"){
    console.log(char);
}

//Nested for-f
let heroes1=[
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
]

for(list of heroes1){
    for(hero of list){
        console.log(hero);
    }
}