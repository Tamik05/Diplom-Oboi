const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const createJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY);
};

class UserController {
  async login(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login } });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Неправильный пароль" });
    }

    const token = createJWT(user.id, user.login, user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();