const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Welcome To ABSENSI ONLINE PEGAWAI ...");
});

const employeeRoutes = require("./employees");
const absenceRoutes = require("./absences");
const typeRoutes = require("./types");
route.use("/employees", employeeRoutes);
route.use("/absences", absenceRoutes);
route.use("/types", typeRoutes);

module.exports = route;
