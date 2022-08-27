// for loop
// (starting point;where to end;how much to increment)
// for(let i = 0 ; <= 10 ; i++){
//     if(i === 2){
//         console.log('Number found...');
//         continue;
//     }
// if(i === 8){
// console.log('loop ends');
// break;
// }


// console.log('Number' +i;
// }

// While loop

    // let i = 10 ;

    // while(i >5){
    //     console.log('Number' +i);
    //     i--;
    // };

    // Do while
    // let i =100 ;
    // do {
    //     console.log('Number' +1);
    //     i++;
    // }
    // while(i<10);

    // loop through array
    // forEach method

    // When you pass a function to another function as a parameter
    // its called callback function

    const numbers = [11,22,33,44,55,66];

    numbers.forEach(function(i,index){
        console.log(index,i);
    });

    for(let i = 0 ; i <numbers.length ; i++){
        console.log(i,numbers[i]);
    }



  