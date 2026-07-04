const accountId = 123456789
let accountEmail = "vivek@example.com"
var accountPassword = "1238764"
accountCity = "New York"
let accountState;

// accountId = 987654321 // Not allowed because accountId is a constant
accountEmail = "shah@example.com"
accountPassword = "987654321"
accountCity = "Los Angeles" 

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])