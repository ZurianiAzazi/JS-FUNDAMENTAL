//create some arrays

const numbers = [43,55,65,90,85,100,456];
const colors = new Array('pink','green','red');

let val;

//Get array length
val = numbers.length;

//check if array is array
val = Array.isArray(numbers);

//Get single value
val = numbers[2];
val = numbers[0];

// insert value to array
// numbers[2] = 250;

//find the indexOf
val = numbers.indexOf(100);

//manipulate the array

//add on to the end of an array
numbers.push(300);

//add onn to the begining of an array
numbers.unshift(800);

//  remove from the end
numbers.pop();

//remove from the begining
numbers.shift();

//splice
// numbers.splice(2,4);

//reverse()
// numbers.reverse();

// concat arrays
val = numbers.concat(colors);

//sort 
val = colors.sort();

// val = numbers.sort();

//compare function
//  val = numbers.sort(function(x,y){
//     return x-y;
// });

// val = numbers.sort(function(x,y){
//     return y-x
// });

//find

val = numbers.find(function(num){
    return num >50;
});








console.log(val);
// console.log(numbers);
// console.log(colors);







console.log(val);
// console.log(numbers);
// console.log(colors);