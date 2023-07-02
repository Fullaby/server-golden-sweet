const {dataCollection, category}= require('../models');

class ControllerData{
static async getData(req,res){
    try {
        let data= await dataCollection.findAll({include: 'category'})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
static async getDataByCategories(req,res){
    try {
        let {id}=req.params
        let data= await dataCollection.findAll({where: {categoriesId:id},include: 'category'})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
}

module.exports= ControllerData