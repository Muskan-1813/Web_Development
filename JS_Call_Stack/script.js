// // function one() {
// //     return 1;
// // }
// // function two() {
// //     return one() + one();
// // }
// // function three(){
// //     let ans = two() + one();
// //     console.log(ans);
// // }
// // three();

// // //JS is single threaded->Synchronous nature
// // setTimeout(()=>{
// //     console.log("Muskan")
// // },2000);
// // console.log("Hello");

// //Call back Nature

// // h1=document.querySelector("h1");
// // setTimeout(()=>{
// //     h1.style.color="red";

// // },2000);
// // h1=document.querySelector("h1");
// // setTimeout(()=>{
// //     h1.style.color="orange";

// // },4000);
// // setTimeout(()=>{
// //     h1.style.color="yellow";

// // },6000);
// const h1 = document.querySelector('h1');
// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColor)nextColor();
//     },delay);
// }
// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000)
//         });
//     });
// });
// //Callback nesting -> Callback Hell

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor((Math.random)*10)+1;
//     if (internetSpeed>4){
//         success();
//     }
//     else{
//        failure();
//     }
   
// }

// savetoDb(
//     "apna College",
//     ()=>{
//         console.log("Data was saved");
//         savetoDb(
//             "Hii world!",
//             ()=>{
//               console.log("Data2 was saved");  
//             },
//             ()=>{
//               console.log("your data2 was not saved");
//     }
//         )
//     },
//     ()=>{
//        console.log("your data was not saved");
//     }
// )

//Promises
function savetoDb(data){
    return new Promise((success, failure) => {
        let internetSpeed=Math.floor((Math.random)*100)+1;
        if(internetSpeed > 4){
            success("success:data was saved");
        }else{
            failure("Failure:weak connection");
        }    
    })
}

let request=savetoDb("HII");
console.log(request);
request.then(()=>{
    console.log("Data1 Saved:promise was resolved");
    savetoDb("Hello")
    .then(()=>{
         console.log("Data2 Saved:promise was resolved");
    })
})
.catch(()=>{
    console.log("Promise was failed");
})



