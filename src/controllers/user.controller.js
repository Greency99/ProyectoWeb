const { User } = require("../database/user.schema");

class UserController {
  static async getAll(req, res) {
    let result = await User.getUsers();
    res.send(result);
  }
  static async insertOne(req, res) {
    let result = await User.saveUser(req.body);
    //     console.log("body", req.body);
    res.status(200).send("ok");
    return;
  }
  static async removeOne(req, res) {
    let result = await User.deleteUser(req.params.email);
    res.status(200).send("ok");
    return;
  }
  static async updateOne(req, res) {
    let selectedUser = await User.getUserByEmail(req.params.email)
    let { email, name, lastname, career } = req.body;
    if (email != "") {
      selectedUser.email = email;
    }
    if (name != "") {
      selectedUser.name = name;
    }
    if (lastname != "") {
      selectedUser.lastname = lastname;
    }
    if (career != "") {
      selectedUser.career = career;
    }
    let result = await User.updateUser(selectedUser)
    res.status(200).send("ok");
    return;
  }
}

module.exports = UserController;
