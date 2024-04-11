import inquirer from "inquirer";

let currency = {
    USD: 1,
    PKR: 277.85,
    EUR: 0.91,
    SAR: 3.74,
    AED: 3.7,
}
let result;
console.log("Welcome to currency converter")
let ans = await inquirer.prompt([
    {message: "Enter Amount You want to convert: ", type: "number", name: "amount"},
    {message: "Select your current currency", type: "list", name: "current_currency", choices: ["USD", "PKR", "EUR", "SAR", "AED"]},
    {message: "Select your desire currency", type: "list", name: "desire_currency", choices: ["USD", "PKR", "EUR", "SAR", "AED"]},
])

switch(ans.current_currency){
    case "USD":
        switch(ans.desire_currency){
            case "USD":
            result = ans.amount
            break;
            case "PKR":
            result = ans.amount*currency["PKR"]
            break;
            case "EUR":
            result = ans.amount*currency["EUR"]
            break;
            case "SAR":
                result = ans.amount*currency["SAR"]
            break
            case "AED":
                result = ans.amount*currency["AED"]
            break
        }
        break;
    case "PKR":
        switch(ans.desire_currency){
            case "USD":
                result = ans.amount/currency["PKR"]
            break;
            case "PKR":
            result = (ans.amount/currency["PKR"])*currency["PKR"]
            break;
            case "EUR":
            result = (ans.amount/currency["PKR"])*currency["EUR"]
            break;
            case "SAR":
                result = (ans.amount/currency["PKR"])*currency["SAR"]
            break
            case "AED":
                result = (ans.amount/currency["PKR"])*currency["AED"]
            break
        }
        break;
    case "EUR":
        switch(ans.desire_currency){
            case "USD":
            result = ans.amount/currency["EUR"]
            break;
            case "PKR":
            result = (ans.amount/currency["EUR"])*currency["PKR"]
            break;
            case "EUR":
            result = (ans.amount/currency["EUR"])*currency["EUR"]
            break;
            case "SAR":
                result = (ans.amount/currency["EUR"])*currency["SAR"]
            break
            case "AED":
                result = (ans.amount/currency["EUR"])*currency["AED"]
            break

        }
        break;
    case "SAR":
        switch(ans.desire_currency){
            case "USD":
            result = ans.amount/currency["SAR"]
            break;
            case "PKR":
            result = (ans.amount/currency["SAR"])*currency["PKR"]
            break;
            case "EUR":
            result = (ans.amount/currency["SAR"])*currency["EUR"]
            break;
            case "SAR":
                result = (ans.amount/currency["SAR"])*currency["SAR"]
            break
            case "AED":
                result = (ans.amount/currency["SAR"])*currency["AED"]
            break

        }
        break;
    case "AED":
        switch(ans.desire_currency){
            case "USD":
            result = ans.amount/currency["AED"]
            break;
            case "PKR":
            result = (ans.amount/currency["AED"])*currency["PKR"]
            break;
            case "EUR":
            result = (ans.amount/currency["AED"])*currency["EUR"]
            break;
            case "SAR":
                result = (ans.amount/currency["AED"])*currency["SAR"]
            break
            case "AED":
                result = (ans.amount/currency["AED"])*currency["AED"]
            break

        }
        break;
}
result = result.toFixed(2)
console.log(result)
// console.log(currency["PKR"])