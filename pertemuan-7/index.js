// if else statement
// let lapar = false;

// if (lapar) {
//   console.log("Saya lapar");
// } else {
//   // else adalah kondisi dimana selain if bisa berjalan
//   console.log("Saya tidak lapar");
// }

// if else if
// let rambuRambu = "biru";

// if (rambuRambu === "merah") {
//   console.log("tidak boleh melintas");
// } else if (rambuRambu === "kuning") {
//   console.log("berhati-hati");
// } else if (rambuRambu === "hijau") {
//   console.log("jalan");
// } else {
//   console.log("rambu rambu tidak terdeteksi, berhati hati");
// }

// conditional dengan switch case
// let rambuRambu = "kuning";

// switch (true) {
//   case rambuRambu === "merah":
//     console.log("tidak boleh melintas");
//     break;
//   case rambuRambu === "kuning":
//     console.log("berhati-hati");
//     break;
//   case rambuRambu === "hijau":
//     console.log("jalan");
//     break;
//   default:
//     console.log("rambu rambu tidak terdeteksi, berhati hati");
// }

// ternary

// let lapar = false;
// lapar ? console.log("Saya lapar") : console.log("Saya tidak lapar");

// let rambuRambu = "biru";
// rambuRambu === "merah"
//   ? console.log("berhenti")
//   : rambuRambu === "kuning"
//   ? console.log("hati hati")
//   : rambuRambu === "hijau"
//   ? console.log("jalan")
//   : console.log("rambu rambu tidak terdeteksi, berhati hati");

// let jabatan = 'CEO'
// if(jabatan === 'CEO') {
//   console.log('akan memimpin perusahaan')
// }else if ('hr') {

// }

// let angka = 1;
// switch(true){
//   case angka === 1:
//     console.log('minggu');
//     break;
//   case angka === 2:
//     console.log('senin');
//     break;
// }

// for loop
// let angka = 10;
// for (angka; angka > 0; angka--) {
//   console.log("angka", angka);
// }

// let jumlah = 0;
// for (let angka = 5; angka > 0; angka--) {
//   jumlah += angka;
//   console.log("jumlah sekarang" + jumlah);
// }

// console.log(jumlah);

// let angka = 1;
// while (angka <= 10) {
//   console.log(angka);
//   angka++;
// }

// let jumlahUser = 5;

// let user = 1;
// while (user <= jumlahUser) {
//   console.log("tampilkan user ke", user);
//   user++;
// }

// do while
let bensin = 9;
// while
while (bensin > 0) {
  console.log("masih ada bensin, bisa nyala", bensin);
  bensin--;
}

// do while
do {
  console.log("nyalakan mesin");
  bensin--;
} while (bensin > 0);
