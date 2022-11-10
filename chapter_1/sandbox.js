// let age = 50;

// let firstName = "Yusuf";
// let lastName = "Habu";
// let email = "yuhyam95@gmail.com"

// let fullName = firstName + " " + lastName;

// console.log(fullName[-1])


// let result = email.indexOf('a');
// let result = email.lastIndexOf('a');
// let result = email.slice(0, 10)
// let result = email.substr(1, 5)


//Order of mathematical operations BIDMAs

// Array methods

// let ninjas = ['Yusuf', 'Aisha', 30];
// let result = ninjas.join(',')

//Type conversion

// let random = 100;
// let result = String(random);


// console.log(result, typeof result);

// Control Flow
// For loop

// const ninjas = ['Yusuf', 'Aisha', 'Elioenai'];

// For loop
// for (let i = 0; i < ninjas.length; i++) {
//     console.log(ninjas[i]);
// }

//While loop
// let i = 0;
// while (i < 3){

//     console.log(ninjas[i]);
//     i++;
// }

// console.log('Loop finished');

//Variable and block scope

//Params and Args

// const greet = function(name="Yusuf", time="Morning") {
    
//     console.log(`Good ${time} ${name}`)
// };

// greet();
// greet('Aisha')
// greet('Aisha', 'Night')

//Orders of params and args must align
//Arrow functions

// const calcArea = (radius) => 3.14 * radius **2;

// const a = calcArea(5);

// console.log(a)

// Callback function

// const myFunc = (callBackFunc) =>{
//     let value = 50;
//     callBackFunc(value)
// };

// myFunc(value => {

//     console.log(value)
// })

// const ul = document.querySelector('.humans');

// let humans = ['Yusuf', 'Aisha', 'Ammar', 'AY', 'Azoro'];

// const logHuman = (human, index) => {

//     console.log(index, human)
// }; 

// humans.forEach(logHuman)

// let html = '';

// humans.forEach(human => {
//     html += `<li style="color: purple"> ${human} </li>`
// })

// ul.innerHTML = html;

// Object Literals

// let user = {
//     name: "Yusuf",
//     username: "yuhyam",
//     surname: "Habu",
//     blogs: ['How to Javascript', 'I like Coffee'],
//     login(){
//         console.log(`${this.username} successfully logged in`)
//     },
//     logBlogs(){
//         console.log(`${this.name} has written these blogs:`)
//         this.blogs.forEach(
//             blog => {
//                 console.log(blog)
//             }
//         )
//     }
// }


// console.log(user.login())
// console.log(user.logBlogs())

// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'Something new to do';
//     ul.prepend(li)
// })

// // const items = document.querySelectorAll('li');

// // items.forEach( item => {
// //     item.addEventListener('click', e =>{
// //         e.target.style.textDecoration = 'line-through';
// //         e.target.remove();
// //     })
// // })

// ul.addEventListener('click', e => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })


//Pop-up Builder

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});




























