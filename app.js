alert("Helo");
console.log(1);
console.log(2);

let ism = "Abror";
let yosh = "18";
console.log(ism, yosh);

yosh = 19;
console.log(yosh);
// let bilan consti farqi let ozgaruvchan const qatdiy
const familiya = "Ma'murov";
console.log(familiya);
// var ham let kabi o'zgaruvchan
var joy = "Farg'ona";
joy = "Farg'ona shahar";
console.log(joy);

// string concetination
let firstName = "Abror";
let lastName = "Ma'murov";
let fullName = firstName + " " + lastName;
console.log(fullName);

let email = " mabrorbk@gmail.com ";
console.log(email);

// getting characters
console.log(fullName[3]);

// string Lengs
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

// LastindexOf
let result2 = email.lastIndexOf("o");
console.log(result2);

// slice = kesib beradi
let result3 = email.slice(10);
console.log(result3);

// replace = o'zgartirib qoyadi

let result4 = email.replace("m", "d");
console.log(result4);

// trim
let result5 = email.trim();
console.log(result5.length, email.length);

// split
let result6 = email.split("");
console.log(result6);

console.log(5 / "salom");

// template string
const title = "Rastamojka qachon ochiladi ?! yohud Monopoliya Respublikasi !";
const author = "Lag'mon markazi";
const likes = 35000000;

// concatentation way
let result7 =
  "Bu post nomi " +
  title +
  " " +
  author +
  "  tomonidan yozilgan. " +
  "va bu postda " +
  likes +
  " ta like bor";

console.log(result7);

// template string way
let result8 = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu postda ${likes} ta like bor`;
console.log(result8);

let age = 18;
console.log(age == 19);
