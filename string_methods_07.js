const firstName = 'John';
const lastName= 'Doe';
const age = 40;
const text = 'Hello from javascript';
const topics = 'software,cloud,security,marketing';

let val ;

val  = firstName +lastName;

//concatination
val  = firstName+' '+lastName;

//Append
val  = 'sara ';
val += 'smith';

val  = 'Hello my name is '+firstName+ ' and  my lastname is '+lastName;

//Escaping
val = 'That\'s awesome';

//length
val  =  firstName.length;

//concat
val  =  firstName.concat(' '+lastName);

//Change case 
val = firstName.toUpperCase();
val  = firstName.toLowerCase();

//indexof()
val  = firstName.indexOf('h');

//charAt()
val = firstName.charAt('0');

//how to last character
val = firstName.charAt(firstName.length-1);

//substring
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,3);
val = firstName.slice(-2);

//split()
val = text.split(' ');
val = topics.split(',');


//replace()
val = text.replace('javascript','react.js');

//includes
val = text.includes('Hello');



console.log(val);