import express from "express";
import { getCourses, searchCourses } from "../controllers/CourseController";
import { getCoursesData, searchCoursesData } from "../validation/CourseValidation";
import { validator } from "../utils/util";

const router = express.Router();

router.get("/", getCoursesData, validator, getCourses);
router.get("/search", searchCoursesData, validator, searchCourses);

export default router;
