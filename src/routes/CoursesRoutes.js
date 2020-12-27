import express from "express";
import { getCourses } from "../controllers/CoursesController";
import { getCoursesData } from "../validation/CourseValidation";
import { validator } from "../utils/util";

const router = express.Router();

router.get("/", getCoursesData, validator, getCourses);

export default router;
