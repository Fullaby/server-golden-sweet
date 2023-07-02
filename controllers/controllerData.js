const {dataCollection}= require('../models');

class ControllerData{
static async getData(req,res){
    try {
        let data= await dataCollection.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
}

module.exports= ControllerData