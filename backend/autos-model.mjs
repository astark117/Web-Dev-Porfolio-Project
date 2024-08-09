// Models for the Automobile Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500: Unable to connect to the server.' });
    } else  {
        console.log('You are now connected to the server.');
    }
});

// SCHEMA: Define the collection's schema.
const automobilesSchema = mongoose.Schema({
    datePurchased: {type: Date, required: true, default:Date.now},
	countryOfOrigin:    { type: String, required: true },
	year:     { type: Number, required: true },
	make: { type: String, required: true },
    model: { type: String, required: true},
    mileage: {type: Number, required: true}
});

// Compile the model from the schema 
// by defining the collection name "automobiles".
const automobiles = mongoose.model('Automobile', automobilesSchema);


// CREATE model *****************************************
const createAuto = async (datePurchased, countryOfOrigin, year, make, model, mileage) => {
    const automobile = new automobiles({ 
        datePurchased: datePurchased, 
        countryOfOrigin: countryOfOrigin,
        year: year, 
        make: make,
        model: model,
        mileage: mileage
    });
    return automobile.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveAutos = async () => {
    const query = automobiles.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveAutoByID = async (_id) => {
    const query = automobiles.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteAutoByID = async (_id) => {
    const result = await automobiles.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateAuto = async (_id, datePurchased, countryOfOrigin, year, make, model, mileage) => {
    const result = await automobiles.replaceOne({_id: _id }, {
        datePurchased: datePurchased, 
        countryOfOrigin: countryOfOrigin,
        year: year, 
        make: make,
        model: model,
        mileage: mileage
    });
    return { 
        _id: _id, 
        datePurchased: datePurchased, 
        countryOfOrigin: countryOfOrigin,
        year: year, 
        make: make,
        model: model,
        mileage: mileage
    }
}

// EXPORT the variables for use in the controller file.
export { createAuto, retrieveAutos, retrieveAutoByID, updateAuto, deleteAutoByID }
