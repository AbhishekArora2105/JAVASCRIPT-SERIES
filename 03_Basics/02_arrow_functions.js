const user= {
    username : "abhi",
    price : "999",

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        
    }
}

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let user = "abhi"
//     console.log(this.user)
// }

// chai

// const chai = () => {
//     let user = "abhi"
//     console.log(this.user)
// }

// chai()

// const add = (num1 , num2) =>{
//     return num1 + num2
// }

// const add = (num1 , num2) => num1 + num2

// const add = (num1 , num2) => (num1 + num2)

const add = (num1 , num2) => ({username:"abhi"})





const a = add(3 , 4)

console.log(a);
