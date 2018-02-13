var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  name: {
    type: String
  },
  displayName: {
    type: String
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
