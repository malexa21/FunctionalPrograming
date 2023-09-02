//Arrow Functions
const add = (a,b) => {
    return a+b
};

console.log(add(10 ,20));


//HOF
const suma = (a,b) => (a+b);
const dif = (a,b) => (a-b);
const mult = (a,b) => (a*b);
const div = (a,b) => (a/b);
const mod = (a,b) => (a%b);

const operatiiMatematice = (a, b, func) => func(a,b);

const n = operatiiMatematice(10 , 15 ,suma)

console.log(n);


//Destructurarea

const obiect = {
    prop1:5,
    prop2:10,
    prop3:7,
    prop4:[4,5,6],
    prop5:{x:"mau" , b:"mar",},
};

const {prop1,prop2,prop3,prop4} = obiect;

const sum =prop1 + prop2 + prop3 + prop4[1];

console.log(sum);


