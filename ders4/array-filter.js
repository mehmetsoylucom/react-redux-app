/*
    Array.filter

    Belli bir kurala gore array filtreler. 
    Ornegin asagida 5’ten buyuk dizi elemanlarini alir. 
    Yeni bir array olusturur, kullandigi array degismez. 
*/

/* Ornek 1 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.filter(item => item < 5);

console.log(arr);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(newArr);
// [ 1, 2, 3, 4 ]


// Ornek 2

function isBigEnough(value) { return value >= 5; } 
console.log(arr.filter(isBigEnough));
// [ 5, 6, 7, 8, 9, 10 ]