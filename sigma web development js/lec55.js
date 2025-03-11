// console.log("wassup")
// var is globally scoped
// const never changes
// let is block scoped
// ** power
// === equal to and type
// "3" (string)===3(integer) false 
// "3"==3 true
// const func1 = (x)=>{
//     console.log("I am an arrow function", x)
// }


// let str="4";
// let tot=str+2;



// console.log(tot);
//  console.log(typeof tot);
// function mean(a,b,c,d,e) {
//     return (a+b+c+d+e)/5;
// }
// console.log(mean(1,2,3,4,5));


// function mean(...numbers) {
//     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum / numbers.length;
// }
// console.log(mean(1, 2, 3, 4, 5)); // Outputs: 3
// console.log(mean(10, 20, 30)); // Outputs: 20


// let str = "please give 1000";
// console.log(str.slice(12, 16)); // "1000"

// let age = Number(prompt("Please enter your age?"));
// if (age > 18) {
//   alert("Can drive");
//   document.body.style.background="green";
// } else if (age < 0) {
//   console.error('Please enter a valid number');
//   document.body.style.background="red"
// } else if (age > 4) {
//   location.href = "https://google.com"; // Corrected the URL and syntax
// } else {
//   alert("Can't drive");
//   document.body.style.background="orange"
// }
// confirm('Do you want to see the prompt again?');


// console.log(typeof window) //object
// console.log(typeof document) //object


//  

// // Create glowing bulb effect using classList toggle method
// const bulb = document.createElement('div');
// bulb.style.width = '100px';
// bulb.style.height = '100px';
// bulb.style.borderRadius = '50%';
// bulb.style.background = 'grey';
// document.body.appendChild(bulb);

// bulb.addEventListener('click', () => {
//   bulb.classList.toggle('glow');
// });

// const style = document.createElement('style');
// style.innerHTML = `
//   .glow {
//     background: yellow;
//     box-shadow: 0 0 20px yellow;
//   }
// `;
// document.head.appendChild(style);

//  function main() {
//   let x=1;
//   try {
//     console.log("The sum is ", x)
//     return true;
//   }
//   catch(error) {
//     console.log("Error aagya bhai")
//     return false;
//   }
//   finally {
//     console.log("files being closed")
//   }
//  }
//   console.log(main())

//write a program to load javascript in browser using promises use .then() to display an alert when the load is complete
