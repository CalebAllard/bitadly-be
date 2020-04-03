const db = require('../../data/db-config');

module.exports = {
    
    findByShortId
    
};




function findByShortId(ShortId) {
    
   return db('urls').select("id","shortid","target_url","short_url","user_id")
    .where('shortid', ShortId).first();
}

