const login = (req, res) => {
    console.log("User Login API");
    console.log(req.body);

    res.status(200).send({
        status: "Success",
        message: "User Signed in Successfully"
    })
}


const registration = (req, res) => {
    console.log("User Registration API");
    console.log(req.body);

    res.status(200).send({
        status: "Success",
        message: "User Signed up Successfully"
    })
}


export { login, registration };