import Course from "../models/Course";
import {
  successMessage,
  successData,
  errorMessage,
  errorData,
  serverError,
} from "../utils/helpers/ResponseHelper";

export const getCourses = async (req, res) => {
  try {
    let { limit, pageNumber } = req.query;
    limit = Number(limit);
    pageNumber = Number(pageNumber);
    const courses = await Course.find({})
      .sort("createdAt")
      .skip(pageNumber)
      .limit(limit)
      .lean();
    res.json(successData(courses));
  } catch (error) {
    res.status(500).json(serverError());
    console.log(error);
  }
};
