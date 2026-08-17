const jwt = require("jsonwebtoken");

function isLoggedin(req, res) {
    const token = req.cookies
    // herr we are going to verify that user login or not 
    console.log(token)

    if (token.login == null) {
        console.log("Invaild cookies")
        throw new Error("Invaild cookies222");
    }
    else {
        const decode = jwt.verify(token.login, 'THIS_IS_YOUR_SALT_KEY');
        const { id, isOtpVerified, iat, exp } = decode;
        if (!id || !isOtpVerified || !iat || !exp) {
            console.log("Invaild cookies")
            throw new Error("Invaild cookies");
        }

        return res.status(400).json({
            msg: "working again"
        })

    }


}
module.exports = isLoggedin;