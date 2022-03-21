const myBirthDate = new Date('2004-03-27');
console.log('myBirthDate -- ', myBirthDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
console.log('anotherDate -- ', anotherDate);

if (myBirthDate.getTime() > anotherDate.getTime()) {
    console.log('birth date is bigger')
}
else {
    console.log("not it's not")
}