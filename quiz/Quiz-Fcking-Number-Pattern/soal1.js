
/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang
examples:
INPUT = 
[
[ 7 ,' ', 5 ],
[' ', 8 , 9 ]
[ 1 ,' ',' '] 
]
ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]
PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/
function missingNum(arr) {
//code here
    if (arr.length === 0) {return []}
    let minRange = Infinity
    let maxRange = -Infinity
    let list_ada = []
    
    for (let i=0; i < arr.length; i++) {
        for (let w = 0; w < arr[i].length; w++) {
        
            if (typeof arr[i][w] !== 'number') continue; 
            list_ada.push(arr[i][w])
            /*
                Pelajaran hari ini Number("") sama dengan 0
                "" jika dibadingkan > or < maka bisa error
            */
        
            if (arr[i][w] > maxRange) {
            maxRange = arr[i][w]
            }
            if (arr[i][w] < minRange) {
            minRange = arr[i][w]
            } 
        }
    }

    let anggota_list = []
    let list_hilang = []
    
    for (let i = 0; i <= maxRange - minRange; i++) {
        anggota_list.push(minRange + i)
    }
    
    for (let i = 0; i < anggota_list.length; i++) {
        if (list_ada.includes(anggota_list[i]) === false) {
            list_hilang.push(anggota_list[i])
        }
    }
    return list_hilang;
}


console.log(missingNum([
[3, ' ', 5],
[1, ' ', 7],
[9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
[2, ' '],
[' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
[11, ' ', 13],
[17, ' ', 19],
[' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
[3, ' ', 5, 15],
[1, ' ', 7, 13],
[9, ' ', ' ', 12],
[' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []
