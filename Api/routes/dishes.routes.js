const router = require('express').Router();
const DishController = require('../controllers/dishes.controller');
const dc = new DishController();

router.post('/', (req,res) => {
    const newDish = req.body;
    dc.addNewDish(newDish)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) =>{
        res.status(400).json(error);
    })
})

router.get("/:id?", (req,res) => {

    if (req.params && req.params.id) {
        const id = req.params.id;

        dc.fetchDishById(id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                res.status(400).json(error);
            })
    } else {
        dc.fetchAllDishes()
        .then((data) => {
             res.status(200).json(data)
         })
        .catch((error) => {
             res.status(400).json(error)
        })
    }
   
});

router.delete("/:id", (req,res) => {
    if (req.params && req.params.id) {
        const id = req.params.id;

        dc.deleteDish(id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(400).json(error);
        })
    }
})

module.exports = router;