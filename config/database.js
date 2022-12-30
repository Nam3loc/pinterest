const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

db.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})