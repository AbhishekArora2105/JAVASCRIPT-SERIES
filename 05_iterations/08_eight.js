const myNums = [1,2,3]


const total = myNums.reduce( (acc , curr) =>{
    console.log(`acc: ${acc}and curr: ${curr}`);
    
    return acc + curr
},0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "data science course",
        price:12999
    },
    {
        itemName: "mobile course",
        price:5999
    }
]


const price = shoppingCart.reduce( (acc , item) =>(acc +item.price),0)
console.log(price);
