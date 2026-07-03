
/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
  //code here
  if (num < 3) {return 'Minimal input adalah 3'}

  let hasil = [];
  let hitung = 1;
  let hasilHitung = [];

  for (let i = 1; i <= num; i++) {
    let dumpArr = [];
    let hasilHitungDump = []
        
    for (let p = 1; p <= num; p++) {

        if (i === 1 || i % 4 === 0 || i % 4 === 1); // gw masih bingung bang. pattern yang tepat tuh yang mana ?
        // Gw coba pattern diatas tapi soal nomer 2 jadi salah. kalo coba yang bawah nomer 3 jadi salah.
        if (i % 2 === 1) {
            hasilHitungDump.push(hitung);
            if (hitung % 4 === 0) {
                dumpArr.push("#");
            } else if (hitung % 2 === 0) {
                dumpArr.push("o");
            } else if (hitung % 2 === 1) {
                dumpArr.push("x")
            }
        } else {
            hasilHitungDump.unshift(hitung);
            if (hitung % 4 === 0) {
                dumpArr.unshift("#");
            } else if (hitung % 2 === 0) {
                dumpArr.unshift("o");
            } else if (hitung % 2 === 1) {
                dumpArr.unshift("x")
            }
        }
        hitung+=1;
    }
    hasil.push(dumpArr);
    hasilHitung.push(hasilHitungDump);
  }
  return hasil;  
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ 
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ] 
// ]

console.log(squareNumber(2)); // Minimal input adalah 3
