const { compareHash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");
const validator = require("validator");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // Validasi untuk email and password are required
      if (!email && !password) {
        throw { name: "LoginError" };
      }

      // Validasi apakah email kosong atau tidak
      if (!email) {
        throw { name: "EmptyEmail" };
      }
      // Validasi email format dengan package validator
      if (!validator.isEmail(email)) {
        throw { name: "EmailFormat" };
      }

      // Validasi apakah password kosong atau tidak
      if (!password) {
        throw { name: "EmptyPassword" };
      }

      const user = await User.findOne({
        where: { email: email },
      });

      // Validasi apakah email/password salah
      if (!user) {
        throw { name: "WrongEmailPassword" };
      }

      if (!compareHash(password, user.password)) {
        throw { name: "WrongEmailPassword" };
      }

      const payload = {
        id: user.id,
        email: user.email,
      };

      const access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
