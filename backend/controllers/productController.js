const { Product } = require("../models/models");
const { Op } = require('sequelize');

const uuid = require('uuid');
const path = require('path');
const jwt = require("jsonwebtoken");

const admin = (token) => {
  if (!token) {
    return false;
  }
  const user = jwt.verify(token, process.env.SECRET_KEY);
  return user.role;
};

const returnIfNull = (req, field) => {
  /* проверка , имеется ли значение в поле */
  if(typeof(undefined) === req.body[field]) {
    return null;
  }
  return req.body[field]
  
}

class ProductController {
  async create(req, res, next) {
    try {
      const { hit, category, title, price } = req.body;
      
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      
      await img.mv(path.resolve(__dirname, '..', 'static', fileName));
      
      const product = await Product.create({
        hit,
        discount: returnIfNull(req, 'discount'),
        category,
        title,
        image: fileName,
        subtitle: returnIfNull(req, 'subtitle'),
        oldprice: returnIfNull(req, 'oldprice'),
        price,
        style: returnIfNull(req, 'style'),
        color: returnIfNull(req, 'color'),
        country: returnIfNull(req, 'country'),
      });
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
      return res.json({ message: err });
    }
  }

  async getAll(req, res) {
    const offset = 0 + ((req.query.page ?? 1) - 1) * 10;
    const sort = JSON.parse(req.query.sort ?? '""');
    const filters = JSON.parse(req.query.filter ?? "{}");
    const search = req.query.search;
    /* цена от - до */
    const priceSorting = JSON.parse(req.query.price ?? '""');

    /* как сортировать */
    const howToSort = () => {
      
      if(priceSorting[0] && priceSorting[1]) {
        /* если есть оба числа - то смотрим между этими значениями*/
        return {
          [Op.between]: [priceSorting[0], priceSorting[1]]
        }
        
      }
      if(priceSorting[0]) {
        /* если только "ОТ - то " */
        return {
          [Op.gt]: priceSorting[0]
        }
      }
      if(priceSorting[1]) {
        /* если только "ДО - то " */
        return {
          [Op.lt]: priceSorting[1]
        }
      }
      return {[Op.notBetween]: [0, 0]}
      
    }
    howToSort()

    return res.json(
      await Product.findAndCountAll({
        limit: 10,
        offset,
        order: [sort?.length ? [sort] : ["id", "ASC"]],
        where: {
          [Op.and]: filters,
          price: howToSort(),
          title: {
            [Op.substring]: search
          }
        },
      })
    );
  }

  async getById(req, res) {
    const token = req.headers["authorization"];
    if (!admin(token)) {
      return res.status(401).json({ message: "Нет доступа!" });
    }
    const { id } = req.params;

    const item = await Product.findOne({
      where: { id },
    });
    return res.json(item);
  }

  async delete(req, res) {
    const token = req.headers["authorization"];
    if (!admin(token)) {
      return res.status(401).json({ message: "Нет доступа!" });
    }
    const { id } = req.params;

    const item = await Product.destroy({ where: { id } });
    return res.json(item);
  }

  async update(req, res) {
    const token = req.headers["authorization"];
    if (!admin(token)) {
      return res.status(401).json({ message: "Нет доступа!" });
    }
    const {
      hit,
      discount,
      image,
      category,
      title,
      subtitle,
      oldprice,
      price,
      style,
      color,
      country,
    } = req.body;

    const item = await Product.update(
      {
        hit,
        discount,
        image,
        category,
        title,
        subtitle,
        oldprice,
        price,
        style,
        color,
        country,
      },
      { where: { id: req.body.id } }
    );
    return res.json(item);
  }
}

module.exports = new ProductController();
