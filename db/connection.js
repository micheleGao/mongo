//mongo atlas connection 

require ('dotenv').config();
const mongoose= require('mongoose');

//mongo url and connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connect to mongo 
mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    },
    () => {
      console.log("connection with Mongo is established!");
    }
);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ connection made!');
});
// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;