// controller.js
const service = require('../Service/service');

exports.GetInfo = async (req, res) => {
  try {
    const data = await service.GetInfo(req.body);
    console.log("📤 Controller sending data:", data);
    return res.status(200).json({
      code:   200,
      status: "success",
      data   : data
    });
  } catch (error) {
    console.error("❌ Controller Error:", error.message);
    return res.status(500).json({
      code:    500,
      status:  "error",
      message: error.message
    });
  }
};






exports.SaveData = async (req, res) => {
  try {
    console.log("📩 Controller SaveData hit", req);
  
    const data = await service.SaveData(req.body);
    
    return res.status(200).json({
      code:   200,
      status: "success",
      data   : data
    });
  } catch (error) {
    console.error("❌ Controller Error:", error.message);
    return res.status(500).json({
      code:    500,
      status:  "error",
      message: error.message
    });
  }
};








exports.UpdateData = async (req, res) => {
  try {
   
    const data = await service.UpdateData(req.body);
    
    return res.status(200).json({
      code:   200,
      status: "successfullu updated",
      data   : data
    });
  } catch (error) {
    console.error("❌ Controller Error:", error.message);
    return res.status(500).json({
      code:    500,
      status:  "error",
      message: error.message
    });
  }
};



exports.deleteData = async (req, res) => {
  try {



    const data = await service.deleteData(req.body);
    

    return res.status(200).json({
      code: 200,
      status: "success",
      data: data
    });
  } catch (error) {
    console.error("❌ Controller Error:", error.message);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: error.message
    });
  }
};

