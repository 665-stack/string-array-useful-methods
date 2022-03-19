const numbers = [2, 5, 6, 43, 7, 9, 19, 23, 20, 21, 98, 75, 55];
//========= slice ========
const numberSliced = numbers.slice(4, 8);
console.log('numberSliced -- ', numberSliced);
//========= splice ========
//splice jinish ta slice er motoi kaj kore onkta. but .slice e slice korlao main array e kono change hoy. jeta .splice e hoy. akhane .splice kora jaygatoku main array theke remove hoye jay;
const numberSpliced = numbers.splice(4, 2);
console.log('numberSpliced -- ', numberSpliced);
console.log(numbers)
//========= splice 2 =======
//akhane .splice er parameter gulo er modde 1st ta holo koto tomo index theke remove korbo; 2nd ta holo koyta index no remove korbo; 3rd theke baki gulo holo remove hoya jaygay kiki boshano hove;
const numberSpliced2 = numbers.splice(4, 3, 999, 333, 555);
console.log('numberSpliced2', numberSpliced2)
console.log('after numberSpliced2', numbers)



