import Sequelize from "sequelize";

const createDatabase = (mysqlX)  =>
    new Promise(function(resolve, reject){
        const createdatabase = mysqlX.createConnection({ 
            host: "localhost",
            user: "root",
            password: "", 
        });
    
        createdatabase.connect(function(err) {
            if (err){
                reject(JSON.stringify(err));
            }else{
                createdatabase.query(`CREATE DATABASE IF NOT EXISTS \`crud_db\`;`, function (err, result) {
                    if (err){
                        reject(JSON.stringify(err));
                    }else{
                        resolve(JSON.stringify(result));
                    }
                });
            }
        }); 
    });

function getDatabase(){
    let db = new Sequelize(
        'crud_db', 
        'root', 
        '', 
        { 
            host: 'localhost',
            dialect: 'mysql' 
        }
    );
    return db;
}





export {
    createDatabase, 
    getDatabase, 
};
