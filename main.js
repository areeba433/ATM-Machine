"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// 12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log("operationAns");
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // ==, -==, +==
        myBalance -= amountAns.amount;
        console.log("yuor remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
