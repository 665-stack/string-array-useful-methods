//=========== split ============
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
//akhane anthem name er string er word gulo k divide kore akta Array banay felbe;
const words = anthem.split(' ');
console.log('words -- ', words)
//akhane jekhane jekhane 'a' paice, shekhanei divide kore dice;
const wihtoutA = anthem.split('a');
console.log('withoutA -- ', wihtoutA)

//=========== slice ===========
//akhane anthem name er string k index number diye slice kora hoice
const smallSlice = anthem.slice(5, 13);
console.log('smallSlice -- ', smallSlice)
//=========== substr ============
//akhaneo anthem name er string k index number er maddome slice kora hoice. but akhane slice korar system ta aktu alada.Jemon- akhane bola hoice 11 tomo index er por theke 8 index er modde ja ace tai dao; 
const anotherPart = anthem.substr(11, 8);
console.log('anotherPart -- ', anotherPart)
//=========== substring ============
//atao onkta .slice() er moto kaj kore;
const againAnotherPart = anthem.substring(11, 15);
console.log('againAnotherPart -- ', againAnotherPart);