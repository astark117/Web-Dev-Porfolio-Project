// Controllers for the Automobile Collection

import 'dotenv/config';
import express from 'express';
import * as autos from './autos-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/autos', (req,res) => { 
    autos.createAuto(
        req.body.datePurchased, 
        req.body.countryOfOrigin, 
        req.body.year,
        req.body.make,
        req.body.model,
        req.body.mileage
        )
        .then(autos => {
            console.log(`"${autos.make}, ${autos.model}" was added to the collection.`);
            res.status(201).json(autos);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400 error: There was a problem with the request.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/autos', (req, res) => {
    autos.retrieveAutos()
        .then(autos => { 
            if (autos !== null) {
                console.log(`All automobiles were retrieved from the collection.`);
                res.json(autos);
            } else {
                res.status(404).json({ Error: '404 error: The automobile not found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400 error: There was a problem with the request.' });
        });
});


// RETRIEVE by ID controller
app.get('/autos/:_id', (req, res) => {
    autos.retrieveAutoByID(req.params._id)
    .then(auto => { 
        if (auto !== null) {
            console.log(`"${auto.make}, ${auto.model}" was retrieved, based on its ID.`);
            res.json(auto);
        } else {
            res.status(404).json({ Error: '404 error: The automobile not found in the collection.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '400 error: There was a problem with the request, please check the ID and try again .' });
    });

});


// UPDATE controller ************************************
app.put('/autos/:_id', (req, res) => {
    autos.updateAuto(
        req.params._id, 
        req.body.datePurchased, 
        req.body.year, 
        req.body.make,
        req.body.model,
        req.body.countryOfOrigin,
        req.body.mileage
    )
    .then(auto => {
        console.log(`"${auto.make}, ${auto.model}" was updated.`);
        res.json(auto);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '400 error: There was a problem with the request, please check the ID and try again .' });
    });
});


// DELETE Controller ******************************
app.delete('/autos/:_id', (req, res) => {
    autos.deleteAutoByID(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} automobile was deleted.`);
                res.status(200).send({ Success: 'The automobile was successfully removed from the collection' });
            } else {
                res.status(404).json({ Error: '404 error: The automobile not found in the collection.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error occurred while processing your request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
