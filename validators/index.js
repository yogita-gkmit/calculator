// reeturn true if email is valid and throw error otherwise.
function validateEmail(email) {
    try{

        if(!email) {
            throw new Error("Email not defined");
        }

    	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email")
        }

        return true;
    }
    catch(err){
        throw new Error(err.message);
    }
}



module.exports = {validateEmail}