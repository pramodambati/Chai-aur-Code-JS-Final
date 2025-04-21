const accountId = 144139
let accountEmail = 'pramod@test.com'
var accountPassword = '12345'
accountCity = "hyderabad"
let accountState

// accountId = 2 // not allowed

accountCity = 'Bangalore'
accountEmail = 'pramod@google.com'

/*
Prefer not to use var 
Because of block and functional scope.
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

