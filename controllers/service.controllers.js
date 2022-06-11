const response = require("../config")
const { sick, ingredient, detailIngredient } = require("../models")

const serviceControllers = {
    getSick : async (req, res, next) => {
        response(res, 200, "success", sick)
    },

    getSickDetail : async (req, res, next) => {
        let data = []
        for(const i in ingredient) {
            if(ingredient[i].id.toString() === req.params.id){
                data.push(ingredient[i])
            }
        }

        response(res, 200, "success", data)
    },

    getIngredient : async (req, res, next) => {
        let data = []
        for(const i in detailIngredient) {
            if(detailIngredient[i].id.toString() === req.params.id){
                data.push(detailIngredient[i])
            }
        }

        response(res, 200, "success", data)
    },
}

module.exports = serviceControllers