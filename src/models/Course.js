import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const CoursesShema = new mongoose.Schema(
  {
    title: String,
    banner: String,
    stars: Number,
  },
  { usePushEach: true, timestamps: true }
);

const Courses = mongoose.model("Courses", CoursesShema);

export default Courses;
