import Category from "../models/Category";
import {
  successData,
  serverError,
} from "../utils/helpers/ResponseHelper";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort("createdAt").lean();
    res.json(successData(categories));
  } catch (error) {
    res.status(500).json(serverError());
    console.log(error);
  }
};
