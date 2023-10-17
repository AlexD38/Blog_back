import category_model from "../models/categories_model.js";

const categories_controller = {
    async AllCategories(req, res) {
        try {
            let cats = await category_model.getAllCategories();
            if (cats) {
                res.json(cats);
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default categories_controller;
