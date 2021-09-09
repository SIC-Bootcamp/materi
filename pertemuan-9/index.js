// // console.log("tes");

// // const proses1 = () => {
// //   console.log("proses 1 selesai");
// // };

// // const proses2 = () => {
// //   setTimeout(() => {
// //     console.log("proses 2 selesai");
// //   }, 5000);
// // };

// // const proses3 = () => {
// //   console.log("proses 3 selesai");
// // };

// // proses1();
// // proses2();
// // proses3();

// // menggunakan promise
// // const getData = () => {
// //   // memangil data menggunakan fetch
// //   fetch("http://hp-api.herokuapp.com/api/characters")
// //     // mendapatkan response dari server lalu merubah datanya menjadi JSON
// //     .then((response) => response.json())
// //     // menampilkan data ke dalam console
// //     .then((result) => console.log(result))
// //     // codingan ini hanya keluar ketika terjadi error
// //     .catch((error) => console.log(error, "hubungi admin"));
// // };

// // menggunakan async await
// const getDataAsync = async () => {
//   try {
//     let response = await fetch("https://api.github.com/users/thoriqnf");
//     response = await response.json();
//     console.log(response);
//     // response.push({ name: "Thoriq" });
//     // console.log(response);
//   } catch (error) {
//     console.log(error, "hubungi admin");
//   }
// };

// // getData();
// getDataAsync();

let fruits = ["Jambu", "Apel", "Mangga", "Jambu", "Jeruk", "Apel"];

let fruitList = fruits.reduce((list, fruit) => {
  console.log("luar", list[fruit]);
  if (list[fruit]) {
    // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
    console.log("dalam if", list[fruit]);
    list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
  } else {
    list[fruit] = 1; // jika belum ada, beri nilai 1
  }
  return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);
