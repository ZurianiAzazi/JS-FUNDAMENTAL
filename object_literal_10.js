const person = {
    firstName : 'sara',
    lastName : 'Smith',
    age:30,
    email:'Sara@gmail.com',
    address : {
        city:'kuala lumpur',
        country:'Malaysia'
    },
    hobbies : ['cooking','yoga']
}
let val;

val = person;
//Get specific value
val=person.firstName;
val= person.lastName;
val=person.age;
val= person.address;
val = person.hobbies;
val = person.address.city;
val = person.address.country;
val = person.hobbies[0];
val = person.hobbies[1];

// console.log(val);

const customers = [
    {id:1 , name : 'sara'},
    {id:2 , name :'John'},
    {id:3 , name :'Kim'},
];

val = customers[2].name;


console.log(val);
console.log(customers);