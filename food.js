const mongoose = require('mongoose'); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

//create a new schema 
//this will define the shape of the documents

const foodSchema = new Schema(
    {
        dishName:String,
        ingredients:[],
        Instructions: String,
        Img:String,   
    },
    {timestamps: true}
)

//creating the food model: we need to convert our schema into a model, 
//this will be stored in food model collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Foods = mongoose.model('Food', foodSchema);

//make this exportable to be accessed in `app.js`
module.exports = Foods;