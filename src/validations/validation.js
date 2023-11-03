const isValidName = function (firstName) {
    const nameRegex = /^[a-z A-Z_]{3,20}$/;
    return nameRegex.test(firstName);
};
const isValidlName = function (lastName) {
    const nameRegex = /^[a-z A-Z_]{3,20}$/;
    return nameRegex.test(lastName);
};

const isValidString = function (input) {
    if (typeof input == "number" || input == null || input == undefined) {
        return false;
    }
    if (typeof input == "string" && input.trim().length == 0) {
        return false;
    }
    return true;
};
const checkObject = (object) => {
    if (Object.keys(object).length == 0) return false;
    return true;
};

const validPincode = function (pincode) {
    const pincodeRegex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/
    return pincodeRegex.test(pincode)
}

const validPancard = function (panNumber) {
    const pincodeRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    return pincodeRegex.test(panNumber)
}

const checkFormat = function (input) {
    if (!input) return false;
    input = input.trim();
    if (input == "") return false;
    else return input;
  };

module.exports = {
    isValidName,
    isValidString,
    checkObject,
    validPincode,
    validPancard,
    checkFormat,
    isValidlName
};