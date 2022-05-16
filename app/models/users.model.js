module.exports = mongoose => {
    // https://mongoosejs.com/docs/api/model.html#model_Model
    const users = mongoose.model(
       "Users",
       mongoose.Schema(
          {
             doctorID: String,
             signinID: String,
             password: String,
             doctorFirstName: String,
             doctorLastName: String
          },
          { timestamps: true }
       )
    );
    return users;
 };
 