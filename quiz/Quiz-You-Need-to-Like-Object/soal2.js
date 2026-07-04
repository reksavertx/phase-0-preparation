/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000
  let duitLarry = 95000
  let duitJack = 90000

  let output = [];
  
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let w = 0; w < tradeActivity[i].length; w++) {
        let is_plus = tradeActivity[i][w].split("+").length === 2
        let option;
        let owner_perusahaan;
        let nama_owner; 
        let deposit;

        if (is_plus === true) {
            option = "plus";
            tradeActivity[i][w] = tradeActivity[i][w].split("+")
            nama_owner = tradeActivity[i][w][0]
        } else {
            option = "minus";
            tradeActivity[i][w] = tradeActivity[i][w].split("-")
            nama_owner = tradeActivity[i][w][0]
        }

        let persen_perubahan = Number(tradeActivity[i][w][1].slice(0,tradeActivity[i][w][1].length - 1)) / 100

        if (nama_owner === "Jeff Bezos") {
            owner_perusahaan = "Amazon";
            if (is_plus === true) {
                duitJeff += duitJeff * persen_perubahan
            } else {
                duitJeff -= duitJeff * persen_perubahan
            }
            deposit = duitJeff;
        } else if (nama_owner === "Larry Page") {
            owner_perusahaan = "Google";
            if (is_plus === true) {
                duitLarry += duitLarry * persen_perubahan
            } else {
                duitLarry -= duitLarry * persen_perubahan
            }
            deposit = duitLarry;
        } else if (nama_owner === "Jack Ma") {
            owner_perusahaan = "Alibaba";
            if (is_plus === true) {
                duitJack += duitJack * persen_perubahan
            } else {
                duitJack -= duitJack * persen_perubahan
            }
            deposit = duitJack;
        }
        output.push({"name" : nama_owner, "deposit" : deposit, "owner":owner_perusahaan});
    }
  }

  return output;
}


console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/