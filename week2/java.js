
const user1 = {
    name: "Tayo",
    balance: 20000,
    currency: "NGN", 
    type: "savings",

}

const user2 = {
    name: "Siddqat",
    balance: 40000,
    currency: "USD", 
     type: ["savings", "checking"],
}

const user3 = {
    name: "Nancy",
    balance: 30000,
    currency: "NGN", 
    type: "savings",

}

const user4 = {
    name: "Ruqayyah",
    balance: 5000,
    currency: "USD", 
    type: "checking",

}


// Number 2 question

let user1Deposit = 10000
let addDeposit1 = user1.balance + user1Deposit
user1.balance = addDeposit1
console.log(`${user1.name}'s balance is ${user1.balance}${user1.currency}`)


let user3Deposit = 450;
let addDeposit3 = user3.balance  + user3Deposit
user3.balance = addDeposit3

console.log(`${user3.name}'s balance is ${user3.balance}${user3.currency}`)


// number 3
let user2withdrawal = 3000;

if (user2withdrawal <= user2.balance) {
    let withdrew = user2.balance - user2withdrawal;
    user2.balance = withdrew;
    console.log(`Successful withdrawal, ${user2.name}. Your account balance is ${user2.balance} ${user2.currency}`);
} else {
    console.log(`Insufficient funds for withdrawal, ${user2.name}.`);
}


let user4withdrawal = 5500;
if (user4withdrawal <= user4.balance) {
    let withdrew = user4.balance - user4withdrawal;
    user4.balance = withdrew;
    console.log(`Successful withdrawal, ${user4.name}. Your account balance is ${user4.balance} ${user4.currency}`); // FIXED
} else {
    console.log(`Insufficient funds for withdrawal, ${user4.name}.`);
}

// 4

let transferAmount = 10000
if (user1.currency === user3.currency){
    let user3balance = user3.balance - transferAmount
    let user1balance  = user1.balance + transferAmount
    user1.balance = user1balance
    user3.balance = user3balance
    console.log(`Transfer sucessful, ${user3.name} has ${user3.balance} and ${user1.name} has ${user1.balance}.`);
}else{
    console.log("Transfer failed: currency mismatch")
}

// number 5
let account = user1

if(account.type === 'savings'){
    const interestresult =account.balance + (account.balance * (2/100))
    account.balance = interestresult;
    console.log(`${account.name} has ${account.balance} because of interest`)

}else if (account.type === "checking"){
    const checkingresult = account.balance - 50
    account.balance = checkingresult
     console.log(`${account.name} has ${account.balance} ruesulting from electronic service deduction`)
}else {
console.log("Account does not have specific type")
}


// 6
let highestAccount;
let lowestAccount;

if (user1.balance > user2.balance){
    highestAccount =user1;
    lowestAccount = user2;
}else{
    highestAccount =user2;
    lowestAccount = user1;
}

if (user3.balance > highestAccount.balance){
    highestAccount =user3;
}else{
    lowestAccount = user3;
}

if (user4.balance > highestAccount.balance){
    highestAccount =user4;
}else{
    lowestAccount = user4;
}

console.log(`Highest account is: ${highestAccount.name}'s account with account balance of ${highestAccount.balance}, and lowest account is: ${lowestAccount.name}'s account with account balance of ${lowestAccount.balance}.`)

// Number 7
let accountCheck = user2;
let status;
if (account.balance > 0){
    status = "Active"
    console.log("Account is Active");
}else if (account.balance === 0){
    status = "Empty";
    console.log("Account is empty");
}else if (account.balance < 0){
    status = "Overdrawn"
    console.log("Account is overdrawn");
}

// number 8

console.log(`${account.name} is using a ${!account.type ? "unknown" : account.type} account and has a balance of ${account.balance} ${account.currency}, and the status is ${status}`)




