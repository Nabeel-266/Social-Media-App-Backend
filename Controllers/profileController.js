const getProfile = (req, res) => {
    console.log(req.params);

    res.status(200).send({
        status: "Success",
        data: [],
        message: "Get Profile Data Successfully"
    })
}

const updateProfile = (req, res) => {
    console.log(req.params);

    res.status(200).send({
        status: "Success",
        data: [],
        message: "Update Profile Successfully"
    })
}

export { getProfile, updateProfile }