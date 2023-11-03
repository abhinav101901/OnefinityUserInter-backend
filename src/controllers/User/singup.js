const { isValidName, isValidlName, checkFormat, validPancard, } = require("../../validations/validation");
const services = require("../../db/dbServiecs");

const signUp = async (req, res) => {
    try {
        let {firstName, lastName, state, district, village, panCard} = req.body;
        const user = {};

        //firstName validations
        firstName = checkFormat(firstName);
        if (!firstName)
            return res
                .status(400)
                .send({ status: false, message: "please check your firstName" });

        if (!isValidName(firstName))
            return res
                .status(400)
                .send({ status: false, message: "pass valid firstName" });
        user.firstName = firstName.toLowerCase();

        //Last Name validations
        lastName = checkFormat(lastName);
        if (!lastName)
            return res
                .status(400)
                .send({ status: false, message: "please check your lastName" });

        if (!isValidlName(lastName))
            return res
                .status(400)
                .send({ status: false, message: "pass valid lastName" });
        user.lastName = lastName.toLowerCase();

        //Address validation------------------------------
        state = checkFormat(state)
        if (!state)
            return res
                .status(400)
                .send({ status: false, message: "pass check state Name" })
        user.state = state

        district= checkFormat(district)
        if (!district)
            return res
                .status(400)
                .send({ status: false, message: "pass check distric Name" })
        user.district = district

        village = checkFormat(village)
        if (!village)
            return res
                .status(400)
                .send({ status: false, message: "pass check village Name" })
        user.village = village

        //Pan-Card Validation...................................................................

        panCard = panCard
        if (!panCard)
            return res
                .status(400)
                .send({ status: false, message: "please check your PanCard" });

        if (!validPancard(panCard))
            return res
                .status(400)
                .send({ status: false, message: "pass valid Pancard" });
        user.panCard = panCard;

        //create user

        let createUser = await services.createData(user);
        if (createUser.status)
            return res
                .status(400)
                .send({ status: false, message: createUser.message });

        return res
            .status(201)
            .send({
                status: true,
                message: "registered successfully",
                data: createUser,
            });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
};
module.exports = { signUp };