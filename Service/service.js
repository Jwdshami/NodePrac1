const model=require('../model/model')

exports.Service = (req,res) => {

    const request=model.Model()

    return request;
};