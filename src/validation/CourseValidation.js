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

export const suggestCourseData = [
  check("title").exists().isString().trim(),
  check("description").exists().isString().trim(),
  check("banner").exists().isString().trim(),
  check("link").exists().isString().trim(),
  check("stars").exists().isNumeric().trim(),
  check("source").exists().isString().trim(),
  body("notifyOnReply").toBoolean(),
];
