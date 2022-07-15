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
function skaicius (){
    const skaiciai = [1,2,3,4,5,6,7,8,9,10]
    return skaiciai[Math.floor(Math.random() * skaiciai.length)]
};
let i=1;
while(i<10){
    console.log(skaicius());
    i++
} console.log(5);

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
    const raides = 'ABCD'
    return raides[Math.floor(Math.random() * raides.length)]
};
const arr2 = [...Array(100)].map(_ => raide());
console.log(arr2);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)