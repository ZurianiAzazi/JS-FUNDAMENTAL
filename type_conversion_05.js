let val;

//Number to string 
val = String(555);
//boolean to string
val= String(true);
//array  to string
val = String([1,2,3,4]);

//string to number
val = Number('5');
val = Number('hello');

//Null to number
val = Number(null);

//boolean to number
val = Number(true);
val = Number(false);



console.log(val);
console.log(typeof val);