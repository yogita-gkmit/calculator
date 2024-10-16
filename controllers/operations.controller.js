const { handleCalculations } = require('../services/operations.service.js')
const { validateEmail } = require('../validators/index.js')


async function calculate(req, res){

	try{

		const {input1, input2, operator} = req.body;
		const email = req.headers['email']; 

		// validate email and inputs 
		validateEmail(email);

		if(!input1 || !input2 || !operator) return res.status(400).json({ message:"Input is not correct" });

		if(typeof input1 !== "number" || typeof input2 !== "number"){
			throw new Error("Input must be number");

		}

		const result = await handleCalculations(input1, input2, operator, email);

		res.status(200).json({ data: { result, input1, input2 } });
	}

	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})
	}
}
module.exports = {calculate}