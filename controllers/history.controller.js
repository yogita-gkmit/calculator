const { getHistory, removeSingleEntryFromDb,removeAllEntryFromDb } = require('../services/history.service.js')
const { validateEmail } = require('../validators/index.js')


async function showHistory(req, res){
	try{
		const email = req.headers['email']; 

		validateEmail(email);

		const pastCalculations = await getHistory(email);

		if(pastCalculations.length==0) return res.status(400).json({message: "No History Found"})

		res.status(200).json({"data": pastCalculations})
	}
	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})

	}
}


async function clearSingleEntry(req, res){

	const email = req.headers['email']; 
	const {id} = req.params;
	try{

		validateEmail(email);
		removeSingleEntryFromDb(id)

		res.status(200).json({message: `Successfully deleted the single entry`})

	}
	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})
		

	}
}


async function deleteAllEntry(req, res){

	const email = req.headers['email'];
	try{
		validateEmail(email);
		removeAllEntryFromDb(email);
		res.status(200).json({message: `All Entries have been Successfully Deleted`})
	}
	catch(err){
		/* istanbul ignore next */
		console.log(err.message);
		/* istanbul ignore next */
		res.status(400).json({message: err.message})
		
	}
}



module.exports = { showHistory, clearSingleEntry, deleteAllEntry }