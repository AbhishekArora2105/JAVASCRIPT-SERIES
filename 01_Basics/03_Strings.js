const name = "Abhishek"
const repo = 50

// console.log(name + repo)
console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Abhi')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const one = "     hellotoall    "
console.log(one.trim());


const url = "https://hitesh%20.gmail.com"
console.log(url.replace('%20' , '-'))

console.log(url.includes('ttp'));
 console.log(url.split('%'))