const ticketController = require("../controllers/ticketControllers");

const routes = [
  {
    method: "GET",
    url: "/api/bus/ticket",
    handler: ticketController.getAllTicket,
  },
  {
    method: "GET",
    url: "/api/bus/ticket/:id",
    handler: ticketController.getSingleTicket,
  },
  {
    method: "POST",
    url: "/api/bus/ticket/create",
    handler: ticketController.addTicket,
  },
  {
    method: "PUT",
    url: "/api/bus/ticket/update/:id",
    handler: ticketController.updateTicket,
  },
  {
    method: "DELETE",
    url: "/api/bus/ticket/:id",
    handler: ticketController.deleteTicket,
  },
];

module.exports = routes;
