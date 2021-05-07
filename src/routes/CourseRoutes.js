import express from "express";
import { getCourses, searchCourses, testHandler } from "../controllers/CourseController";
import { getCoursesData, searchCoursesData } from "../validation/CourseValidation";
import { validator } from "../utils/util";

const router = express.Router();

router.get("/", getCoursesData, validator, getCourses);
router.get("/search", searchCoursesData, validator, searchCourses);
router.get("/suggest-course", suggestCourseData, validator, suggestCourse);

export default router;
