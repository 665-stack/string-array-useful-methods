//========= .arguments ==========
//ei arguments jinish ta hocca array like object. jar fole atate push pop type jinish use kora jabe na. but length use kora jabe. Loop use kora jabe;
function addNumbers(num1, num2) {
    console.log('arguments -- ', arguments[1]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 64, 78, 34);
console.log('sum -- ', sum);
//another example for arguements;
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Mahmodul', 'Hasan', 'Shahin');
console.log('name -- ', name)
