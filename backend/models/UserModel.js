import Sequelize from "sequelize";
import mysql from "mysql2";
import {
    createDatabase,
    getDatabase,
} from "../config/Database.js";


const DBConnected = getDatabase();


const User = DBConnected.define('users', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});


//MiripVoidMain yang pasti dijalankan duluan
(async()=>{
    createDatabase(mysql)
        .then(
            function(resolveResult){
                console.log(`(CreateDatabase2)PromiseSuccess: ${resolveResult}`);
                DBConnected.sync();
            }
        ).catch(   
            function(rejectResult){
                console.log(`(CreateDatabase2)PromiseError: ${rejectResult}`);
            }
        );
})();


export {
    User,
};