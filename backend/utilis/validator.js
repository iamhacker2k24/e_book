var validator = require('validator');
function vailduser(data) {
    console.log(data)
    const mandatoryField = ["name", "email"]

    const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));
    //thsi will check is everything there or not 
  
    if (!IsAllowed) {
        throw new Error(" Fileds missings");

    }
    if (!validator.isEmail(data.email)) {

        console.log("Invaild email")
        throw new Error("Invaild email");
    }
    if (data.fullName.length < 3) {
        console.log("Name should be at least 3 characters");
        throw new Error("Name should be at least 3 characters");
    }


   console.log("validator verified");
}

module.exports = vailduser;

