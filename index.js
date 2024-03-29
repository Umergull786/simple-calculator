#! /usr/bin/env node 
//(upper line called shabang)
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "enter firts number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "select one of the operator to perform ", type: "list", name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    }
]);
//conditional statment
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "Substraction")
    console.log(asnwer.firstnumber - asnwer.secondnumber);
else if (asnwer.operator === "Multiplication")
    console.log(asnwer.firstnumber * asnwer.secondnumber);
else if (asnwer.operator === "Division")
    console.log(asnwer.firstnumber / asnwer.secondnumber);
else {
    console.log('please select valid operator ');
}
