var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

mongoose.connection.on('conected', function() {
    console.log(`mongose conected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;