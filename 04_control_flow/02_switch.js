// switch case stmt

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1 :
        console.log("Januray");
        break;
    case 2 :
        console.log("Febuary");
        break;
    case 3 :
        console.log("March");
        // break;
    case 4 :
        console.log("April");
        // break;
    default :
        console.log("Please enter Number between 1 to 12");
        break;
}

const week = "Sun" // Values are case sensitive

switch (week) {
    case "Mon" :
        console.log("Monday");
        break;
    case "Tue" :
        console.log("Tuesday");
        break;
    case "Wed" :
        console.log("Wednesday");
        break;
    case "Thr" :
        console.log("Thrusday");
        break;
    case "Fri" :
        console.log("Friday");
        break;
    case "Sat" :
        console.log("Saturday");
        break;
    case "Sun" :
        console.log("Sunday");
        break;
    default :
        console.log("Value entered is incorrect");
        break;
}