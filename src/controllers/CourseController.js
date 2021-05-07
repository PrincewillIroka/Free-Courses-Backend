import Course from '../models/Course';
import { successMessage, successData, errorMessage, errorData, serverError } from '../utils/helpers/ResponseHelper';

export const getCourses = async (req, res) => {
	try {
		let { limit, pageNumber, categoryId } = req.query;
		limit = Number(limit);
		pageNumber = Number(pageNumber);
		const courses = await Course.find({ ...(categoryId && { categoryId }), isApproved: true })
			.sort('createdAt')
			.skip(pageNumber)
			.limit(limit)
			.lean();
		res.json(successData(courses));
	} catch (error) {
		res.status(500).json(serverError());
		console.log(error);
	}
};

export const searchCourses = async (req, res) => {
	try {
		let { title, limit, pageNumber } = req.query;
		limit = Number(limit);
		pageNumber = Number(pageNumber);
		const courses = await Course.find({
			title: { $regex: title, $options: 'i' },
			isApproved: true,
		})
			.sort('createdAt')
			.skip(pageNumber)
			.limit(limit)
			.lean();
		res.json(successData(courses));
	} catch (error) {
		res.status(500).json(serverError());
		console.log(error);
	}
};

export const suggestCourse = async (req, res) => {
	try {
		let { title, description, banner, link, stars, source } = req.payload;
		await Course.create({
			...(title && title),
			...(description && description),
			...(banner && banner),
			...(link && link),
			...(stars && stars),
			...(source && source),
			isApproved: false,
		}).then(() => {
			res.json(successMessage(`Thanks for your suggestion! We'll review it before adding it.`));
		});
	} catch (error) {
		res.status(500).json(serverError());
		console.log(error);
	}
};
