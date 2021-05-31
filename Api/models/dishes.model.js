class DishModel {


    createNewDish(dishData) {
        return new Promise((resolve, reject) => {
            process.firebase
            .firestore()
            .collection("Restaurant Dishes")
            .add(dishData)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }

    getAllDishes() {
        return new Promise ((resolve, reject) => {
            process.firebase
            .firestore()
            .collection("Restaurant Dishes")
            .get()
            .then((docArray) => {
                let data = [];
                docArray.forEach((document) => {
                    data.push({
                        id:  document.id,
                        ...document.data()
                    })
                })
                resolve({data});
            })
            .catch((error) => {
                reject(error);
            })
        })
    }

    getDishById(id) {
        return new Promise ((resolve, reject) => {
            process.firebase
            .firestore()
            .collection("Restaurant Dishes")
            .doc(id)
            .get()
            .then((document) => {
                const dish = {
                    id: document.id,
                    ...document.data()
                };
                resolve(dish)
            })
            .catch((error) => {
                reject(error);
            })
        })
    }

    deleteDish(id) {
        return new Promise ((resolve, reject) => {
            process.firebase
            .firestore()
            .collection("Restaurant Dishes")
            .doc(id)
            .delete()
            .then((payload) => {
                resolve(payload)
            })
            .catch((error) => {
                reject(error);
            })
        })
    }

}

module.exports = DishModel;