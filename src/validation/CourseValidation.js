import { check, body } from "express-validator";

export const getCoursesData = [
  check("pageNumber").exists().isNumeric().trim(),
  check("limit").exists().isNumeric().trim(),
  body("notifyOnReply").toBoolean(),
];

export const searchCoursesData = [
  check("title").exists().isString().trim(),
  check("pageNumber").exists().isNumeric().trim(),
  check("limit").exists().isNumeric().trim(),
  body("notifyOnReply").toBoolean(),
];
