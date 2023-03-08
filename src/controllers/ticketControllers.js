const ticketSchema = require("../models/schema");

exports.getAllTicket = async (req, reply) => {
  try {
    const ticket = await ticketSchema.find();
    return ticket;
  } catch (err) {
    console.log(err);
    throw this.err;
  }
};

exports.getSingleTicket = async (req, reply) => {
  try {
    const id = req.params.id;
    const ticket = await ticketSchema.findById(id);
    return ticket;
  } catch (err) {
    throw this.err;
  }
};

exports.addTicket = async (req, res) => {
  try {
    const ticket = new ticketSchema(req.body);
    const save = ticket.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    throw this.err;
  }
};

exports.updateTicket = async (req, reply) => {
  try {
    const id = req.params.id;
    const ticket = req.body;
    const { ...updateData } = ticket;
    const update = await ticketSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw this.err;
  }
};

exports.deleteTicket = async (req, reply) => {
  try {
    const id = req.params.id;
    const ticket = await ticketSchema.findByIdAndRemove(id);
    return ticket;
  } catch (err) {
    throw this.err;
  }
};
