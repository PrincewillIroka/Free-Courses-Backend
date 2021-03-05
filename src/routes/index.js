import express from "express";
import CourseRoutes from "./CourseRoutes";
import CategoryRoutes from "./CategoryRoutes";

const router = express.Router();

router.use("/courses", CourseRoutes);
router.use("/categories", CategoryRoutes);

export default router;
