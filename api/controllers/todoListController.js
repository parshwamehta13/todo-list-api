"use strict";

var mongoose = require("mongoose");
var Todo = mongoose.model("Todo");

exports.list_all_todos = function(req, res) {
  Todo.find({}, function(err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.create_a_todo = function(req, res) {
  var new_todo = new Todo(req.body);
  new_todo.save(function(err, todo) {
    if (err) {
      res.send(err);
    } else {
      res.json(todo);
    }
  });
};

exports.read_a_todo = function(req, res) {
  Todo.findOne({ name: req.params.todoName }, "name displayName", function(
    err,
    todo
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(todo);
    }
  });
};

exports.update_a_todo = function(req, res) {
  Todo.findOneAndUpdate(
    { name: req.params.todoName },
    req.body,
    { new: true },
    function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.json(todo);
      }
    }
  );
};

exports.delete_a_todo = function(req, res) {
  Todo.remove(
    {
      name: req.params.todoName
    },
    function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          message: "Todo Successfully deleted"
        });
      }
    }
  );
};
