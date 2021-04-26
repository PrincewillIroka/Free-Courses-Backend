import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const CoursesShema = new mongoose.Schema(
	{
		title: String,
		description: String,
		banner: String,
		stars: Number,
		source: String,
		link: String,
		categoryId: { type: ObjectId, ref: 'Category' },
	},
	{ usePushEach: true, timestamps: true }
);

const Courses = mongoose.model('Courses', CoursesShema);

export default Courses;
