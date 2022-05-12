module.exports = mongoose => {
    // https://mongoosejs.com/docs/api/model.html#model_Model
    const sample = mongoose.model(
       "sample",
       mongoose.Schema(
          {
             title: String,
             description: String,
             published: Boolean
          },
          { timestamps: true }
       )
    );
    return sample;
 };
 