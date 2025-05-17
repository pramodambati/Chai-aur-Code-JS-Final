// Shoping cart you don't know how many parameters will come

function calculateCartPrice(...num1) {
    return num1     
}

// console.log(calculateCartPrice(1, 2, 3));

// rest operator
function calculateCartPrice2(val1, val2, ...num1) {
    // return num1 , val1    
    return [num1 , val1 ]   
}

// console.log(calculateCartPrice2(1, 2, 3, 4, 5));

const user = {
    username : "hitesh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);  
}

handleObject(user)

handleObject({
    username : "pramod",
    prices : 999,
    rating : 5
})

function returnSecondValue(anyarray) {
    console.log(anyarray[1]);    
}

returnSecondValue([1, 'pramod', 2])
