const { type } = require("../models");

class TypeController {
  static getAllTypes(req, res) {
    type
      .findAll()
      .then((types) => {
        res.send(types);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    const { typeName } = req.body;
    type
      .create({
        typeName,
      })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getTypeById(req, res) {
    const id = +req.params.todoId;
    console.log(req.params);
    type
      .findByPk(id)
      .then((result) => {
        result
          ? res.send(result)
          : res.send({
              message: `type id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    type
      .destroy({
        where: { id },
      })
      .then((result) => {
        result === 1
          ? res.send({
              message: `type id ${id} has been deleted.`,
            })
          : res.send({
              message: `type has not been deleted.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { typeName } = req.body;
    type
      .update(
        {
          typeName,
        },
        {
          where: { id },
        }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = TypeController;
