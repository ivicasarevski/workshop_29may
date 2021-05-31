const DishModel = require('../models/dishes.model');
const dm = new DishModel();

class DishController {
    addNewDish(dish) {
        return dm.createNewDish(dish)
    }

    fetchAllDishes() {
        return dm.getAllDishes();
    }

    fetchDishById(id) {
        return dm.getDishById(id);
    }

    deleteDish(id) {
        return dm.deleteDish(id);
    }
}

module.exports = DishController;