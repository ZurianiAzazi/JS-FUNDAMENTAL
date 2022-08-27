// function declaration 

function greeting (firstName='John',lastName="Doe"){
    // if(typeof firstName === 'undefined'){firstName='John'}
    // if(typeof lastName === 'undefined'){lastName='Doe'}
    // console.log('welcome to the academy');
    return  'welcome '+firstName+' '+lastName;
}

console.log(greeting('sara','smith'));

//function expression 
const sqr = function(a=2){
    return a*a;
};

console.log(sqr(9));

//IIFEs (IMMIDIATLY INVOKABLE FUNCTION EXPRESSION)
(function(){
    console.log('Function ran....')
})();

(function(name){
    console.log('hello '+name);
})('sara');

//when a function is a property of an object we call it method

const todo = {
    add: function(){
        console.log('Add todo ... ');
    },
    edit: function(){
        console.log('Edit todo....');
    }
};

todo.add();