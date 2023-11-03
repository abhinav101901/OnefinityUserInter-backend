const userModel = require("../model/userModel");

// user section
const checkEmailAndNumber = async (email, number) => {
  try {
    let userExist = await userModel.find({
      $or: [{ email: email }, { number: number }],
    });
    if (userExist.length >= 1) {
      console.log(userExist);
      if (email == userExist[0].email) {
        return { status: false, message: "email duplicate" };
      } else return { status: false, message: "number duplicate" };
    }
    return { status: true, message: "no duplicacy" };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

const createData = async (data) => {
  try {
    return await userModel.create(data);
  } catch (error) {
    return { status: true, message: error.message };
  }
};
module.exports = {
  checkEmailAndNumber,
  createData,
};