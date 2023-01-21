
const brandsOfSneekers = ['Addidas', 'Reebok','Nike','NewBalance','Balanciagas','Yeezy']

// Granualar for loop
// for(let i=0; i<brandsOfSneekers.length; i++){
//     if(brandsOfSneekers[i] == 'Addidas'){
//         break;
//     }
//     console.log(brandsOfSneekers[i])
// }

// Moodern type of for loop and you can this for objects
// for(let brand of brandsOfSneekers){
//     console.log(brand)
// }

// let x = 0; //initial value
// while(x<brandsOfSneekers.length){
//     console.log(brandsOfSneekers[x])
//     x++;
// }

let x= 0;
do{
    console.log(brandsOfSneekers[x])
    x++;
}while(x>brandsOfSneekers.length)

