//const suma = (a,b) => {
//    return a+b
//};

//console.log(suma(10 ,20));

const suma = (a,b) => (a+b);
const dif = (a,b) => (a-b);
const mult = (a,b) => (a*b);
const div = (a,b) => (a/b);
const mod = (a,b) => (a%b);

const operatiiMatematice = (a, b, func) => func(a,b);

const n = operatiiMatematice(10 , 15 ,suma)

console.log(n)



