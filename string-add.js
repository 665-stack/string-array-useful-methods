//======== .concat() =========
const first = 'My';
const second = ' City';
// const fullString = first + second;
//ababe caile onk bar concat kore add korte parbo;
const fullString = first.concat(second).concat(' is good.')
console.log(fullString);
//======== .join() ==============
const words = ['alim', 'badhon', 'cemeron', 'david'];
// const allwords = words.join('')
// const allwords = words.join(' ')
const allwords = words.join(', ')
console.log('allwords -- ', allwords);