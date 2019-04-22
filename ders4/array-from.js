/*
    Array.from
    Verilen ogeden array olusturur. 
    Array kopyalarken de kullanilabilir. 
*/

// Ornek 1
console.log(Array.from("birşey")); 
// ["b", "i", "r", "ş", "e", "y"]

// Ornek 2
// Length kullanimi

const arr = Array.from({ length: 10 }, (value, index) => index * 2);
console.log(arr);
// [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// Ornek 3 
// Diziyi kopyalamis oluyoruz

const cars = ['Porsche', 'Ferrari'];
const carsCopy = Array.from(cars);
console.log(carsCopy);
// [ 'Porsche', 'Ferrari' ]