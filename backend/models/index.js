const mongoose = require('mongoose')
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect ("mongodb+srv://ayiemba:57865786@cluster0.i1h2g6y.mongodb.net/mytwitter?retryWrites=true&w=majority",
{keepAlive: true}
);

module.exports.User = require("./user");

