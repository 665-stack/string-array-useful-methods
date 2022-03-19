const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 13pro max',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'
];
const searching = 'laptop';
const output = [];

//.indexof
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
//.includes;; ei .includes tao onekta .indexof er motoi kaj kore;
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
//another example for .starsWith()
const products2 = [
    'Dell hardcore i9 12gb laptop',
    'Iphone 13pro max',
    'Dell thempad',
    'Google pixel 6',
    'Dell commercial yoga laptop',
    'Samsung galaxy fold 3',
    'laptop dell'
];
const searching2 = 'dell';
const output2 = []
//.startsWith() diye buja jay je, ami jei jinish ta khustaci sheta string er shurute ace naki nai;
for (const product2 of products2) {
    if (product2.toLowerCase().startsWith(searching2.toLowerCase())) {
        output2.push(product2);
    }
}
console.log(output2)