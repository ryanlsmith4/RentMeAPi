const Rental = require('../models/rental');
const router = require("express").Router()

    // Takes user to the listing page
    router.get('/', (req, res) => {
        Rental.find()
        .then(rentals => {
            return res.json({rentals: rentals});
        })
        .catch(err => {
            console.log(err);
        });
    });

    // show

    router.get('/rentals/view/:id', (req, res) => {
        // Users can see individual listing
        Rental.findById(req.params.id).then((rental) => {
            return res.json({rentalId: rental});
        }).catch((err) => {
            console.log(err.message);
        })
    });

    // delete

    router.delete('/rentals/delete/:id', function (req, res) {
        // deletes a rental
        console.log("Delete Rental");
        Rental.findByIdAndRemove(req.params.id).then((rental) => {
            res.json({Deleted:rental})
            // res.redirect('/');
        }).catch((err) => {
            console.log(err.message);
        })
    })
    // edit page


    router.post('/rentals/view/new', (req, res) => {
        Rental.create(req.body).then((rental) => {
            rental.landlord = req.user
            console.log(rental);
            res.json({created: rental})
            rental.save()
            // res.redirect(`/rentals/view/${rental._id}`);
        }).catch((err) => {
            console.log(err.message);
        })
    })


    router.put('/rentals/view/edit/:id', (req, res) => {
        // Allows user to edit rentals
        Rental.findByIdAndUpdate(req.params.id, req.body)
        .then(rental => {
            res.json({edited: rental})
            res.redirect(`/rentals/view/${rental._id}`)
        })
        .catch(err => {
            console.log(err.message);
        })
    })

module.exports = router
