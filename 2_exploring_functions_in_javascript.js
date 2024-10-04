// Task 1 create a function that handles bank account deposit

let totalAccountBalance = 0;

function accountDeposit (depositAmount) {
    if (depositAmount > 0) {
    totalAccountBalance += depositAmount;
    return `New Balance: $${totalAccountBalance}, Amount Deposited: $${depositAmount}`;
}
    else {return "Please ensure deposit amount is greater than zero dollars"}
};
// function for deposits

console.log(accountDeposit(500));
// Sample deposit using accountDeposit function

// Task 2 create a function that handles withdrawals ensuring sufficient balance

function accountWithdrawal (withdrawalAmount) {
    if (withdrawalAmount > totalAccountBalance) {
        return "Transaction Voided withdrawal amount must not exceed account balance";
    }
    else {
        totalAccountBalance -= withdrawalAmount;
        return `New Balance: $${totalAccountBalance}, Amount Withdrawn: $${withdrawalAmount}`;
    }
}
// function for withdrawals
console.log(accountWithdrawal(100));
// Sample withdrawal using accountWithdrawal function

// Task 3 Develop a function to check current account balance

function checkBalance (account) { if (account > 0) {
    return `Current Balance: $${account}`;}
    else {
        return "Account is overdrawn, please see teller";
    }
}
// Function to check current balance

console.log(checkBalance(totalAccountBalance));
// Sample checkBalance call
