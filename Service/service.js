const model=require('../model/model')

exports.GetInfo =async (req,res) => {

    try {
      
        const data = await model.GetInfo(req);
        
        return data; 
      } catch (err) {
        console.error("❌ Service Error:", err.message);
        throw err; // Pass the error to the controller
      }
    };





exports.SaveData = async (req) => {
  try {


    // Validate payload
    const payload = req;
    if (!payload || Object.keys(payload).length === 0) {
      throw new Error("Payload is missing or empty");
    }

    // Pass only data, not the whole request
    const result = await model.SaveData(payload);

    return result;

  } catch (err) {
    console.error("❌ Service Error:", err.message);
    throw err; // Let the controller handle the response
  }
};





exports.UpdateData =async (req,res) => {

    try {
     
        const data = await model.UpdateData(req);
        
        return data; 
      } catch (err) {
        console.error("❌ Service Error:", err.message);
        throw err; // Pass the error to the controller
      }
    };


exports.deleteData = async (req) => {
  try {
    const Cnic = req.Cnic; 
 
  
    
    // Access Cnic from the request body
    
    const data = await model.deleteData(Cnic);
    return data;
  } catch (err) {
    console.error("❌ Service Error:", err.message);
    throw err;
  }
};

