// Shopping cart all total

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(accumulator, currentValue) {
//     console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue    
// }, 3)

// console.log(myTotal); // 9

const myTotal = myNums.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "UdemyCourses",
        price : 5000,
        year : '2019-2023',
        month : "N/A"
    },
    {
        itemName : "LCO course",
        price : 4999,
        year : 2022,
        month : "April"
    },
    {
        itemName : "Web Development",
        price : 14999, 
        year : 2022,
        month : "July"
    },
    {
        itemName : "Faraz DSA in C++",
        price : 4999,
        year : 2023,
        month : "August"
    },
    {
        itemName : "js",
        price : 999,
        year : 2025,
        month : "March"
    },
    {
        itemName : "Gen AI chai aur code",
        price : 3750,
        year : 2025,
        month : "April"
    }     
]

// console.log(shoppingCart.reduce((acc, currval) => (acc + currval), 0));

// Blindly copy pasting doesn't work you have to understand what functionality you need to acheive

// const totalAmount = shoppingCart.reduce( (acc, currVal) => (acc + currVal), 0)
// console.log(totalAmount);

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

    