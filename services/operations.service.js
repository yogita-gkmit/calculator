
const history = require('../models/history.model.js')

async function handleCalculations(input1, input2, operator, email) {
    let result;

    try {
        switch (operator) {
            case "+":
                result = input1 + input2;
                break;
            case "-":
                result = input1 - input2;
                break;
            case "*":
                result = input1 * input2;
                break;
            case "/":
                if (input2 === 0) {
                    throw new Error("Denominator must not be zero");
                }
                result = input1 / input2;
                break;
            default:
                throw new Error("Operator is not valid");
        }

        // Create a new record and save it to history
        const newRecord = new history({ input1, input2, operator, result, email });
        await newRecord.save();

        return result;

    } catch (err) {
        console.log('Calculation error:', err.message);
        throw new Error(err.message)
    }
}



module.exports = { handleCalculations }