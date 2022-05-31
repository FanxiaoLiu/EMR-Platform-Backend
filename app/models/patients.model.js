module.exports = mongoose => {
    // https://mongoosejs.com/docs/api/model.html#model_Model
    const patients = mongoose.model(
       "Patient",
       mongoose.Schema(
          {
             HCNumber: String,
             firstName: String,
             lastName: String,
             address: String, 
             city: String, 
             province: String, 
             phoneNumber: String,
             email: String,
             relations: Array, // Could be an object as well
             age: Number,
             sex: String,
             height: Number, // cm
             weight: Number, // kg
          },
          { timestamps: true }
       )
    );
    return patients;
 };
 