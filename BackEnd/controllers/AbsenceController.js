const { absence } = require("../models");

class AbsenceController {
  static getAllAbsence(req, res) {
    absence
      .findAll()
      .then((absences) => {
        res.send(absences);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    const { idEmployee, date, goIn, goOut } = req.body;
    absence
      .create({
        idEmployee,
        date,
        goIn,
        goOut,
      })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getAbsenceById(req, res) {
    const id = +req.params.todoId;
    console.log(req.params);
    absence
      .findByPk(id)
      .then((result) => {
        result
          ? res.send(result)
          : res.send({
              message: `absence id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    absence
      .destroy({
        where: { id },
      })
      .then((result) => {
        result === 1
          ? res.send({
              message: `absence id ${id} has been deleted.`,
            })
          : res.send({
              message: `absence has not been deleted.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { idEmployee, date, goIn, goOut } = req.body;
    absence
      .update(
        {
          idEmployee,
          date,
          goIn,
          goOut,
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

module.exports = AbsenceController;
