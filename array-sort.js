//=========== .sort() ===========
//.sort() diye array er ultapalta upadan gulo k seiral onujayi shajano hoy;
const numbers = [4, 6, 7, 8, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
console.log('sortedNumbers -- ', sortedNumbers);
//acharao .sort() diye string type array er opadan keo English alphabet onushare shajano hoy;
const friends = ['hiron', 'milon', 'molan', 'abul', 'babul', 'deepjol']
const sortedFriends = friends.sort();
console.log('sortedFriends -- ', sortedFriends);
//=========== .reverse() ==========
//.reverse() just .sort() er reverse version;
const friends2 = ['alamin', 'janayed', 'dulal', 'kalam', 'mim', 'akash', 'oporbo', 'shahin']
const reverseFriends = friends2.reverse();
console.log('reverseFriends -- ', reverseFriends);
const reverseNumbers = numbers.reverse();
console.log('reverseNumbers -- ', reverseNumbers);
//.sort() and .reverse() chaile akshatheo kora jay;
const sortedReverseFriends = friends2.sort().reverse();
console.log('sortedReverseFriends -- ', sortedReverseFriends)



//sorting fun with numbers
// 2 digit er number diye sort korte gele sort hobe na, ar tai a system;
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log('sortedReverseFriends -- ', sortedBigNumbers);