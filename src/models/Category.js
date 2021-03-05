import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategoryShema = new mongoose.Schema(
  {
    title: String,
  },
  { usePushEach: true, timestamps: true }
);

const Category = mongoose.model("Categories", CategoryShema);

export default Category;
