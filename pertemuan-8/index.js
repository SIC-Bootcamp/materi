// membuat Object

// let person = {
//   name: "John",
//   age: 20,
//   isVaccinated: true,
//   makananFavorite: ["ayam", "steak"],
//   pet: {
//     kucing: "katy",
//     anjing: "dogi",
//   },
// };
// console.log(person.pet);
// person.pet.hamster = "cheta";

// console.log(person);
// console.log(person.age);
// console.log(person.isVaccinated);
// console.log(person.pet);
// person.pet.kucing = "si belang";
// console.log(person.pet);

// person.pet.kucing = "";
// console.log(person.pet);

// delete person.pet.kucing;
// console.log(person.pet);

// const greeting = {
//   welcome: function () {
//     return "Welcome to SIC Class";
//   },
//   birthdayReminder: function () {
//     alert("Selamat ulang tahun");
//   },
// };
// console.log(greeting.welcome());
// console.log(greeting.birthdayReminder());

// const car = {
//   color: "red",
//   gasoline: "pertamax",
//   wheel: 4,
//   startEngine: function () {
//     return "engine started";
//   },
//   brake: function () {
//     return "ban di rem";
//   },
// };
// console.log(car.brake());

// let person = [
//   {
//     name: "John",
//     age: 20,
//     isVaccinated: true,
//     makananFavorite: ["ayam", "steak"],
//     pet: {
//       kucing: "katy",
//       anjing: "dogi",
//     },
//   },
//   {
//     name: "Skilvul",
//     age: 20,
//     isVaccinated: false,
//     makananFavorite: ["ayam", "steak"],
//   },
// ];

// let person2 = [
//   { name: "john", age: 20 },
//   { name: "bob", age: 25 },
// ];

// cara mengakses array
let job = ["Frontend", "Backend", "Fullstack", 100, true];
console.log(job[3]);
console.log(job[4]);

job[3] = "UI Designer";
job[4] = "UX Researcher";

console.log(job);

// job.push("Developer Operations");
job.pop();
job.pop();

// splice
job.splice(1, 1, "UI Designer", "UX Researcher");
console.log(job);

let numberRandom = [3, 7, 4, 1, 2];

console.log(numberRandom);
numberRandom.sort();
console.log(numberRandom);

// looping dengan .map
let doubleMap = numberRandom.map((number) => {
  return number * 2;
});
console.log(doubleMap);

// looping dengan .forEach
numberRandom.forEach((number, index) => {
  return (numberRandom[index] = number * 2);
});

console.log(numberRandom);

let studentName = ["Fajar", "Hafidz", "Nuzhan", "Arka", "Ridwan"];

studentName.sort();
studentName.reverse();
console.log(studentName.length());
