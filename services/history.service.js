const history = require('../models/history.model.js')

async function getHistory(email){
	try{
		const calculations = await history.find({ email }).sort({timestamp: -1});
		return calculations;
	}
	catch(err){
		console.log(err);
	}
}

async function removeSingleEntryFromDb(id){
		await history.deleteOne({_id: id});
}

async function removeAllEntryFromDb(email){
	await history.deleteMany({email});
}


module.exports = { getHistory, removeSingleEntryFromDb, removeAllEntryFromDb }