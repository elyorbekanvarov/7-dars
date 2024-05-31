// 1 - masala

// let n = +prompt("Oyning raqamini kiriting");
// switch (key) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Bunday oy mavjud emas");
//     break;
// }

// 2 - masala

// function ballHisobla() {
//   let son = +prompt("Son kiriting");
//   switch (true) {
//     case son >= 90 && son <= 100:
//       alert("A");
//       break;
//     case son >= 80 && son < 90:
//       alert("B");
//       break;
//     case son >= 70 && son < 80:
//       alert("C");
//       break;
//     case son >= 60 && son < 70:
//       alert("D");
//       break;
//     case son >= 0 && son < 60:
//       alert("F");
//       break;
//     default:
//       alert("0 va 100 oraligida son kiriting");
//       break;
//   }
// }

// 3 - masala

// function vaqtgaQarabSalom(soat) {
//   if (soat >= 5 && soat < 12) {
//     return "Xayrli tong!";
//   } else if (soat >= 12 && soat < 17) {
//     return "Xayrli kun!";
//   } else if (soat >= 17 && soat < 21) {
//     return "Xayrli kech!";
//   } else if (soat >= 21 || soat < 5) {
//     return "Xayrli tun!";
//   } else {
//     return "Noto'g'ri vaqt kiritildi.";
//   }
// }

// let kiritilganVaqt = 14;
// let salom = vaqtgaQarabSalom(kiritilganVaqt);
// console.log(salom);

// 4 - masala

// function togriRaqamKiritish(min, max) {
//   let raqam;
//   do {
//     raqam = prompt(`${min} ${max}`);
//   } while (raqam < min || raqam > max);
//   return raqam;
// }
// let raqamWhile = togriRaqamKiritish(1, 10);
// console.log(`${raqamWhile}`);
// let raqamDoWhile = togriRaqamKiritish(1, 10);
// console.log(`${raqamDoWhile}`);

// 5 - masala

// function juftSonlarniChiqar(n) {
//   let i;
//   while (i <= n) {
//     console.log(i);
//     i += 2;
//   }
// }

// juftSonlarniChiqar(20);

// 6 - masala

// function xabarKiritish() {
//   let xabar;
//   while (true) {
//     xabar = prompt("Xabar kiriting (to'xtatish uchun 'stop' so'zini kiriting):");
//     if (xabar.toLowerCase() === "stop") {
//       break;
//     } else {
//       console.log("Siz kiritgan xabar:", xabar);
//     }
//   }
//   console.log("Dastur to'xtadi.");
// }
// xabarKiritish();

// 7 - masala

// function ortachaQiymatHisoblash(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     let raqam = parseFloat(prompt(`Iltimos, ${i}-raqamni kiriting:`));
//     sum += raqam;
//   }
//   return sum / n;
// }
// let sonlarSoni = parseInt(prompt("Nechta son kiritmoqchisiz?"));
// let ortachaQiymat = ortachaQiymatHisoblash(sonlarSoni);
// console.log(`Kiritilgan sonlarning o'rtacha qiymati: ${ortachaQiymat}`);