function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('==1===============');
const palyginti = (a,b) => a===b? console.log('lygus'): console.log(Math.max(a,b));
palyginti(rand(0,10),rand(0,10))
console.log('==2===============');

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i<11;i++){
    console.log(i);
}
console.log('==3===============');
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i<11;i+=2){
    console.log(i);
}
console.log('==4===============');
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 1; i<6;i++){
    console.log(rand(1,10));
}
console.log('==5===============');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// function skaicius (){
//     const skaiciai = [1,2,3,4,5,6,7,8,9,10]
//     return skaiciai[Math.floor(Math.random() * skaiciai.length)]
// };
let i=0;
while(i != 5){
     i = Math.ceil(Math.random() * 10);
     console.log(i);
} ;

console.log('==6===============');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const arr1 = []
for (let i = 10; i<31;i++){
    arr1.push(rand(10,30));
}
let mx = 0;
for (let j =0; j< arr1.length-1;j++){
    if(arr1[j]>mx){
        mx = arr1[j]
    }
}

console.log(mx);

console.log('==7===============');
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

function raide (){
    const abecele = 'ABCD'
    return abecele[Math.floor(Math.random() * abecele.length)]
};
const arr2 = [...Array(100)].map(_ => raide());

function charCount(str) {
    const raides = {
    };

    for (const symbol of str) {
        if (raides[symbol]) {
            raides[symbol]++;
        } else {
            raides[symbol] = 1;
        }
    }

    return raides;
}

console.log(charCount(arr2));
console.log('==8===============');
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a,b){
    let res =0
    if (typeof a === 'number' && typeof b === 'number'){
        res = a + b;
    } else
    if (Array.isArray(a) && Array.isArray(b)){
        res = a.length + b.length
    } else {
        return console.log('netinkami duomenys');
    }
    return res%2 === 0 ? res: 'suma nelygine';;
}
console.log(lygineSuma(rand(0,100), rand(0,100)));
console.log('==9===============');
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
   function pirminisSkaicius(c){
    if (typeof c !== 'number'){
        return 'kintamasis ne skaicius'
    }
    let res =0
    for (let i=2; i < c; i++){
        if (c%i === 0){
            res++
        }
    }
    return res === 0 ? `Pirminis` : ` Ne Pirminis`
   }
   console.log(pirminisSkaicius(rand(0,100)));
   console.log('==10===============');
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
 const arr3 = [...Array(10)].map(_ => rand(1,10));
  function telefonoNumeris(Ph){
    const part1 =[];
   const part2 =[];
   const part3 =[];
  for (let k = 0; k < 3; k++){
        part1.push(arr3[k])
    }
    for (let l = 3; l < 6; l++) {
        part2.push(arr3[l])
    }
    for (let m = 6; m < Ph.length; m++) {
        part3.push(arr3[m]);
    }
    return `(${part1.join('')}) ${part2.join('')}-${part3.join('')}`
  }
  
  console.log(telefonoNumeris(arr3));