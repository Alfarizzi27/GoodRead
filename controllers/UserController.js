const bcrypt = require('bcryptjs');
const { User } = require('../models');


class UserController {
    static async register(req, res, next) {
        try {
            let { email, username, password } = req.body


        } catch (error) {
            console.log(error);
        }
    }

    static async login(req, res, next) {
        try {

        } catch (error) {

        }
    }

    static async listUser(req, res, next) {
        try {
            const data = await User.findAll()
            return res.status(200).json({ User: data })
        } catch (error) {

        }
    }
}

module.exports = UserController