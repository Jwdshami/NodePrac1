
const sql = require('mssql');
const connectDB = require('../database/db');


async function GetInfo(req) {
  const pool = await connectDB();
  const result = await pool.request()

    .input('Cnic', sql.NChar(15), req.Cnic)
  .query("SELECT * FROM [dbo].[Customer_Info] WHERE Cnic = @Cnic");
  
 
  return result.recordset;
}




// Function to delete data from the database
// This function takes a request object, extracts the Cnic, and deletes the corresponding record
async function deleteData(req) {
  try {
  console.log("📤 Delete request received:", req);

    if (!req) {
      throw new Error("Cnic not provided in request body.");
    }

    const pool = await connectDB();

    const result = await pool.request()
      .input('Cnic', sql.NChar(15), req) // Use correct SQL type
      .query("DELETE FROM [dbo].[Customer_Info] WHERE Cnic = @Cnic");

    return {
      message: "Delete successful",
      rowsAffected: result.rowsAffected
    };
  } catch (err) {
    console.error("❌ Delete error:", err);
    throw err;
  } finally {
    sql.close();
  }
}




// SaveData function to insert data into the database
// This function takes a request object, extracts the body, and inserts the data into the database
async function SaveData(req,res) {
  try {
    // Connect to DB
    const pool = await connectDB();
    // Execute query with parameters
    const result = await pool.request()
      .input('Customer_Name', sql.NChar(50), req.Customer_Name )
      .input('Father_Name', sql.VarChar(50), req.Father_Name)
      .input('Age', sql.Int, req.Age)
      .input('Address', sql.VarChar(100), req.Address)
      .input('Spouse', sql.VarChar(50), req.Spouse)
      .input('Children', sql.Int, req.Children)
      .input('lugage_bags', sql.Int, req.lugage_bags)
      .input('lugage_weight', sql.Int,  req.lugage_weight)
      .input('Cnic', sql.NChar(15), req.Cnic)
      .input('Phone_Number', sql.NChar(20), req.Phone_Number)
      .input('Email_Address', sql.NChar(100), req.Email_Address)
      .input('CheckIn_time', sql.DateTime, new Date('2025-07-22T10:00:00'))
      .input('CheckOut_time', sql.DateTime, new Date('2025-07-23T18:30:00'))
      .query(`
    INSERT INTO [sa].[dbo].[Customer_Info] (
   [Customer_Name],
    [Father_Name],
      [Age],
      [Address],
      [Spouse],
      [Children],
      [lugage_bags],
      [lugage_weight],
      [Created_At],
      [Updated_At],
      [Cnic],
      [Phone_Number],
      [Email_Address],
      [CheckIn_time],
      [CheckOut_time]
    ) 
      VALUES (
      @Customer_Name,
      @Father_Name,
      @Age,
      @Address,
      @Spouse,
      @Children,
      @lugage_bags,
      @lugage_weight,
      GETDATE(),
      GETDATE(),
      @Cnic,
      @Phone_Number,
      @Email_Address,
      @CheckIn_time,
      @CheckOut_time
    );
  `);


    console.log("✅ Insert successful:", result.rowsAffected);

    return result.recordset;
  } catch (err) {
    console.error("❌ Insert error:", err);
  } finally {
    sql.close();
  }
}







    // Execute query with parameters


async function UpdateData(req) {
  try {
    const pool = await connectDB();
    const request = pool.request();

    // Required field to find the row
    request.input('Cnic', sql.NChar(15), req.Cnic);

    // All fields to update
    request.input('Customer_Name', sql.NChar(50), req.Customer_Name);
    request.input('Father_Name', sql.VarChar(50), req.Father_Name);
    request.input('Age', sql.Int, req.Age);
    request.input('Address', sql.VarChar(100), req.Address);
    request.input('Spouse', sql.VarChar(50), req.Spouse);
    request.input('Children', sql.Int, req.Children);
    request.input('lugage_bags', sql.Int, req.lugage_bags);
    request.input('lugage_weight', sql.Int, req.lugage_weight);
    request.input('Phone_Number', sql.NChar(20), req.Phone_Number);
    request.input('Email_Address', sql.NChar(100), req.Email_Address);
    request.input('CheckIn_time', sql.DateTime, req.CheckIn_time);
    request.input('CheckOut_time', sql.DateTime, req.CheckOut_time);

    const result = await request.query(`
      UPDATE [sa].[dbo].[Customer_Info]
      SET 
        Customer_Name   = @Customer_Name,
        Father_Name     = @Father_Name,
        Age             = @Age,
        Address         = @Address,
        Spouse          = @Spouse,
        Children        = @Children,
        lugage_bags     = @lugage_bags,
        lugage_weight   = @lugage_weight,
        Phone_Number    = @Phone_Number,
        Email_Address   = @Email_Address,
        CheckIn_time    = @CheckIn_time,
        CheckOut_time   = @CheckOut_time,
        Updated_At      = GETDATE()
      WHERE Cnic = @Cnic
    `);

    console.log("✅ Full update successful:", result.rowsAffected);
    return { message: "Full update successful", rowsAffected: result.rowsAffected };
  } catch (err) {
    console.error("❌ Full update error:", err);
    throw err;
  } finally {
    sql.close();
  }
}





module.exports = {
  GetInfo,
  SaveData,
  UpdateData,
  deleteData

};