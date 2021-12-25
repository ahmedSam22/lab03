const Users = require("../models/users");

const find = (query) => Users.find(query) //done
const create = (query) => Users.create(query) //done
const remove = (_id) => Users.findOneAndDelete({ _id}); //done
const edit = (_id, body) => Users.findOneAndUpdate({_id},body); //done

module.exports = {
    find,create,remove,edit
}