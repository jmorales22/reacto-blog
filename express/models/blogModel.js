const db = require('./conn');

class BlogModel {
    constructor(id, full_name, title, content){
        this.id = id;
        this.full_name = full_name;
        this.title = title;
        this.content = content;
    }

    static async getBlogs(){
        try {
            const response = await db.any(`SELECT * FROM blog;`);
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
    static async getId(id){
        try {
            const response = await db.any(`SELECT * FROM blog WHERE id=${id};`);
            console.log('this is the id', id)
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
    
}

module.exports = BlogModel;