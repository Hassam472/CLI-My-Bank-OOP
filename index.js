#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\tWelcome to My Bank"));
class User {
    userName;
    account_Number;
    pin;
    balance;
    transfer_Limit;
    account_Type;
    branch_Code;
    address;
    constructor() {
        this.userName = "Hassam";
        this.account_Number = 5244560932;
        this.pin = 1852;
        this.balance = 10000;
        this.transfer_Limit = 100000;
        this.account_Type = "Elite Current";
        this.branch_Code = 5986;
        this.address = "Orangi town, Karachi";
    }
}
const ex_User = new User();
const account_Info = await inquirer.prompt([
    {
        name: "pinCode",
        type: "input",
        message: "Please Enter Your Pin Code..."
    }
]);
if (ex_User.pin == account_Info.pinCode) {
    console.log("Correct Pin");
}
else {
    console.log("Invalid Pin Code");
}
;
while (ex_User.pin == account_Info.pinCode) {
    const transaction_Opt = await inquirer.prompt([
        {
            name: "Options",
            type: "list",
            message: "What you want to do?",
            choices: ["Cash Withdrawal", "Check Balance", "Fast Cash",
                "Cash Transfer", "Cash Deposit", "Account Statements"]
        }
    ]);
    account_Info.pinCode = false;
    if (transaction_Opt.Options === "Cash Withdrawal") {
        const amount = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Please Enter Your Amount..."
            }
        ]);
        if (amount.Amount < ex_User.balance) {
            if (amount.Amount) {
                const deduct = ex_User.balance - amount.Amount;
                console.log(`Transaction Successful!\nYour Remainig Balance is ${chalk.bold(deduct)}$`);
            }
        }
        else {
            console.log("Insufficient Balance or Invalid Amount");
        }
    }
    else if (transaction_Opt.Options === "Check Balance") {
        console.log(`Your Account Balance is ${chalk.bold(ex_User.balance)}$`);
    }
    else if (transaction_Opt.Options === "Fast Cash") {
        const fast_Cash = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Select Your Withdraw Amount...",
                choices: [500, 1000, 2000, 5000, 10000, 15000]
            }
        ]);
        if (fast_Cash.FastCash < ex_User.balance) {
            if (fast_Cash.FastCash) {
                const deduct2 = ex_User.balance - fast_Cash.FastCash;
                console.log(`Transaction Successful!\nYour Remainig Balance is ${chalk.bold(deduct2)}$`);
            }
        }
        else {
            console.log("Insufficient Balance or Invalid Amount");
        }
    }
    else if (transaction_Opt.Options === "Cash Transfer") {
        const transfer = await inquirer.prompt([
            {
                name: "cash_Transfer",
                type: "list",
                message: "Select Transfer Methods...",
                choices: ["EasyPaisa", "JazzCash", "Bank Transfer",]
            }
        ]);
        if (transfer.cash_Transfer === "EasyPaisa") {
            const method1 = await inquirer.prompt([
                {
                    name: "EP",
                    type: "number",
                    message: "Enter EasyPaisa account number (without dashes)..."
                },
                {
                    name: "EP2",
                    type: "number",
                    message: "How much money do you want to transfer?"
                }
            ]);
            if (method1.EP2 < ex_User.balance) {
                if (method1.EP2) {
                    const deduct3 = ex_User.balance - method1.EP2;
                    console.log(`Money Transfer Successful!\nYour Remainig Balance is ${chalk.bold(deduct3)}$`);
                }
            }
            else {
                console.log("Insufficient Balance or Invalid Amount");
            }
        }
        else if (transfer.cash_Transfer === "JazzCash") {
            const method2 = await inquirer.prompt([
                {
                    name: "JZ",
                    type: "number",
                    message: "Enter JazzCash account number (without dashes)..."
                },
                {
                    name: "JZ2",
                    type: "number",
                    message: "How much money do you want to transfer?"
                }
            ]);
            if (method2.JZ2 < ex_User.balance) {
                if (method2.JZ2) {
                    const deduct4 = ex_User.balance - method2.JZ2;
                    console.log(`Money Transfer Successful!\nYour Remainig Balance is ${chalk.bold(deduct4)}$`);
                }
            }
            else {
                console.log("Insufficient Balance or Invalid Amount");
            }
        }
        else if (transfer.cash_Transfer === "Bank Transfer") {
            const method3 = await inquirer.prompt([
                {
                    name: "Bank",
                    type: "number",
                    message: "Enter Bank account number (without dashes)..."
                },
                {
                    name: "Bank2",
                    type: "number",
                    message: "How much money do you want to transfer?"
                }
            ]);
            if (method3.Bank2 < ex_User.balance) {
                if (method3.Bank2) {
                    const deduct5 = ex_User.balance - method3.Bank2;
                    console.log(`Money Transfer Successful!\nYour Remainig Balance is ${chalk.bold(deduct5)}$`);
                }
            }
            else {
                console.log("Insufficient Balance or Invalid Amount");
            }
        }
    }
    else if (transaction_Opt.Options === "Cash Deposit") {
        const credit = await inquirer.prompt([
            {
                name: "Credited",
                type: "number",
                message: "How much money do you want to deposit?"
            }
        ]);
        if (credit.Credited) {
            const deposit = ex_User.balance + credit.Credited;
            console.log(`Deposit Successful!\nNow Your Currently Balance is ${chalk.bold(deposit)}$`);
        }
        else {
            console.log("Transaction Failed! First enter the amount which you want to deposit");
        }
    }
    else if (transaction_Opt.Options === "Account Statements") {
        console.log(ex_User);
    }
}
;
