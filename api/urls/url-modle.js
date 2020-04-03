const db = require('../../data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    edit
};

function add(url){
    
    return db('urls').insert(url)
    .then(ret => {
        return findBy(ret[0]);
    });     
}

function find() {
   return db(urls);
}

function findBy(filter) {
       
    return db("urls")
        .select("id", "short_url","target_url", "user_id")
        .where('id', filter)
        .first();
}


function findById(id) {
    return db("urls").select("id","short_url", "target_url","user_id")
    .where('user_id', id);
    
}

function edit(url){
    return db('urls').update(url);
}