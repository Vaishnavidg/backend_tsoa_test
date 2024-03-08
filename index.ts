import App from './app';
import 'reflect-metadata';
const { ConnectMongoDb, mongoDBURL } = require("./config/db.config");

require('dotenv').config({ 'path': 'local.env' });


const server = App.build();
server.listen(process.env.PORT, async () => {
    try {
        // Connection
        await ConnectMongoDb(URL)
            .then(() => {
                console.log(URL);
                console.log("MongoDb Connected!!");
            })

    } catch (err) {
        console.log("getting error")
    }

});

module.exports = server;
