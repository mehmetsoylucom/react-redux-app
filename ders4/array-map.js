/*
    Array.map

    Yeni bir array olusturur, kullandigi array degismez. 
    Array/Objedeki her bir eleman icin islem yapmak amaciyla kullanilir.

    Array.map, array filter gibi eleman silmez. 
    Siradaki elemana islemi uygular.

    {length: 10} seklinde tanimalanacak ilk parametre dizi
    uzunlugunu berlirleyebilir.
*/

// Ornek 1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map(item => item * 2);
console.log(newArr);

// Ornek 2

const users = [
  {
    id: 1,
    username: 'alpcan',
  },
  {
    id: 2,
    username: 'hasan',
  },
  {
    id: 3,
    username: 'burak',
  },
];

console.log(users.map(user => `ID: ${user.id}, Username: ${user.username}`));