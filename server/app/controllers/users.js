const moment = require("moment");
const { getAllUsers, loginUser } = require("../models/user");
const Utils = require("../helpers/utils");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (email == "" || password == "") {
    return res.status(400).json({
      success: false,
      message: "Se till att fylla i epost och lösenord",
    });
  }

  const result = await loginUser(email, password);
  if (result) {
    const token = Utils.generateJWT(result);
    const refreshExpiry = moment()
      .utc()
      .add(3, "days")
      .endOf("day")
      .format("X");
    const refreshtoken = Utils.generateJWT({
      exp: parseInt(refreshExpiry),
      data: result.id,
    });

    return res.status(201).json({
      success: true,
      user: result,
      token,
      refresh: refreshtoken,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Error logging in",
  });
};

const users = async (req, res) => {
  const response = await getAllUsers();
  if (response != []) {
    return res.status(200).json({
      success: true,
      users: response,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Error fetching users",
  });
};

const me = async (req, res) => {
  const response = await getMyUser(req.body.id);
  return res.status(200).json({
    success: true,
    user: response.data.user,
  });
};

module.exports = { login, users, me };
// export default {};
