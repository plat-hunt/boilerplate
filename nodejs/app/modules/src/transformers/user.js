// transform data for list user
exports.transform = data => {
    return {
        name: data.firstName + " " + data.lastName,
        phoneNo: data.phoneNo
    }
};

module.exports = exports;
