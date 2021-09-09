// cara membuat varibel dengan var
// var myFirstName = "skilvul";
// console.log(myFirstName);
// var masih bisa digunakan tetapi sudah tidak di rekomendasikan

// cara membuat varibel dengan let
// let myLastName = "samsung";
// console.log(myLastName);
// myLastName = "impact byte";
// console.log(myLastName);

// cara membuat variabel dengan const
// const myId = 12345;
// console.log(myId);
// myId = 123456;

// let myAge = 20;
// let myName = "thoriq";

let lebar = 20;
let tinggi = 10;

let luas = lebar * tinggi;
console.log(luas);

let lebar2 = 15;
let tinggi2 = 12;
let luas2 = lebar2 * tinggi2;

// cara membuat function
function menghitungLuas(number1, number2) {
  return number1 * number2;
}

// cara memanggil function
console.log(menghitungLuas(100, 20));

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

console.log(tambah(10, 2));
console.log(tambah(109, 21));
console.log(tambah(5, 3));

// function hitungLuasLingkaran(jariJari) {
//   return (22 / 7) * jariJari * jariJari;
// }

// cara membuat arrow function
const hitungLuasLingkaran = (jariJari) => {
  return (22 / 7) * jariJari * jariJari;
};

console.log(hitungLuasLingkaran(70));
console.log(hitungLuasLingkaran(140));

// perbedaan arrow function dengan function biasa
// hanya di cara penulisannya saja

const myName = "Thoriq";
const sayMyName = () => {
  // let myAge = 20;
  return myName;
};

console.log(myName);
console.log(sayMyName());
