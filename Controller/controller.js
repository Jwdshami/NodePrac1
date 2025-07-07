
const service=require('../Service/service')

exports.Controller = (req, res) => {

    const result=service.Service()
   console.log("At the Conrolerr",result)
   res.send(result);
};