
/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  equation = String(equation)
  if (equation.length === 1 || equation[1] === "0") {return equation}

  return equation[0] + "0".repeat(equation.length - 1) + "+" + parseNumber(Number(equation.split("").slice(1).join("")))
}

/*

Versi lebih baik dan sempurna dari Ai

function parseNumber(equation) {
    equation = String(equation);

    if (equation.length === 1) return equation;

    if (equation[0] === "0") {
        return parseNumber(equation.slice(1));
    }

    let depan = equation[0] + "0".repeat(equation.length - 1);
    let sisa = parseNumber(equation.slice(1));

    return sisa === "0" ? depan : depan + "+" + sisa;
}
*/
console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3