import express from "express";
import CoursesRoutes from "./CoursesRoutes";

const router = express.Router();

router.use("/courses", CoursesRoutes);

export default router;
