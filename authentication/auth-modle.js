const bcrypt = require('bcrypt');
const db = require('../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function add(user){
    //registure user in db
   return db('users').insert(user, "id").then( ids => {
    const [id] = ids;   
    return findById(id);
   })
        
}

function find() {
    return db("users").select("id", "username");
}

function findBy(filter) {
    return db("users")
        .select("id", "username","password", "email")
        .where(filter);
}


function findById(id) {
    return db("users")
        .select("id", "username")
        .where({ id })
        .first();
}