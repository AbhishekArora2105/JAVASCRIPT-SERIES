const user = {
    name : "Hitesh",
    age: 20,
    location: "Jagraon",
    lastlogindays: ["Monday" , "Tuesday"]
}

// console.log(user["age"]);

user["email"] = "Abhi@gmail.com"

// console.log(user["email"]);


const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isloggedin = false

console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname: {
        firstname : "Abhi",
        lastname: "arora"
    }
}
// console.log(regularuser.fullname.firstname)


const obj1 = {1:"a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = Object.assign({},obj1 , obj2)

const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'));


const course = {
    name : "JS in hindi",
    price: "999",
    instructor: "hitesh"
}

const {instructor : person} = course

console.log(person);




