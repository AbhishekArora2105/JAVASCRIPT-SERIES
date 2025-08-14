function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function add(num1 , num2){
//     console.log(num1+num2);
    
// }

function add(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}
const result = add(4,5)
// console.log(result);


function loginUserMsg(username){
    if(username === undefined){console.log("Please enter a username");
        return
    }
    
    return `${username} just logged in`
}

// console.log(loginUserMsg("abhi"))

function calculate(...num1){
    return num1
}

// console.log(calculate(200,900,822));

const user = {
    username : "abhi",
    price : 200
}
function handleObject(any){
    console.log(`Username is ${any.username} and price is ${any.price}`);
    
}

handleObject(user)