//=========== split ============
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
//akhane anthem name er string er word gulo k divide kore akta Array banay felbe;
const words = anthem.split(' ');
console.log(words)
//akhane jekhane jekhane 'a' paice, shekhanei divide kore dice;
const wihtoutA = anthem.split('a');
console.log(wihtoutA)

//=========== slice ===========
//akhane anthem name er string k index number diye slice kora hoice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice)
//=========== substr ============
//akhaneo anthem name er string k index number er maddome slice kora hoice. but akhane slice korar system ta aktu alada.Jemon- akhane bola hoice 18 tomo index er por theke 3 index er modde ja ace tai dao; 
const anotherPart = anthem.substr(10, 9);
console.log(anotherPart)