//1. Arrow Functions
const add = (a,b) => {
    return a+b
};

console.log(add(10 ,20));


//2. HOF
const suma = (a,b) => (a+b);
const dif = (a,b) => (a-b);
const mult = (a,b) => (a*b);
const div = (a,b) => (a/b);
const mod = (a,b) => (a%b);

const operatiiMatematice = (a, b, func) => func(a,b);

const n = operatiiMatematice(10 , 15 ,suma)

console.log(n);


//3. Destructurarea

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


//4. Array functions

const lista = [1,2,3,4,5,6,7,8,9,10];
//map

const adunari = lista.map((el) => el+el);

console.log(adunari);

//forEach

const afisare = lista.forEach((el) => console.log(el));


//filter

const selector = lista.filter((el) => el % 2 === 0);
console.log(selector);


//reduce

const adun = lista.reduce((el) => suma(el , el+1));

console.log(adun)



