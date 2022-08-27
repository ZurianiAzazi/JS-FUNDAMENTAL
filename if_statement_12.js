// if(condition we want to check){
    // do somethong
// }else{
    // do something else
// }

const id = 100;

//equal to 
// if(id == 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

//not equal to 
// if(id != 100){
//     console.log('not equal to 100');
// }else{
//     console.log('equal to 100');
// }

//equal type and value
// if(id === 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

// not equal vaalue and type
// if(id !== 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

//greaterthan and less than
// if(id >= 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// };

//if else

// const color = 'pink';

// if(color === 'red'){
//     console.log('color  is red');
// }else if (color === 'blue'){
//     console.log('color is blue');
// }else if (color === 'green'){
//     console.log('color is green');
// }else {
//     console.log('color not found!');
// };

// logical operators
//  &&  / ||

const name = 'Sara';
const age =23;

// &&
if(age >= 0 && age < 12){
    console.log(`${name} is child`);
}else if (age >=13 && age <= 19){
    console.log(`${name} is a teenager`)
}else{
    console.log(`${name} is an adult`);
}

// ||
if(age < 16 || age > 65){
    console.log(`${name} can not run the race`);
} else {
    console.log(`${name} is registered for the race`);
}

//Ternary operators
console.log((id === 100 ? 'correct' : 'incorrect'));


//without braces
if(id === 100)
 console.log('correct');
 else
 console.log('incorrect');