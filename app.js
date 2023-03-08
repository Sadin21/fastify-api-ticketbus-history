const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const routes = require("./src/routes/route");

// fastify.register(require("@fastify/mongodb"), {
//   forceClose: true,
//   url: "mongodb://127.0.0.1:27017/bus",
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/bus")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

routes.forEach((route, index) => {
  fastify.route(route);
});

const startServer = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    console.log("server tidak berhasil");
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
