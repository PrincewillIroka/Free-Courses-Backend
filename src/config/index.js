require("dotenv").config();

import Joi from "@hapi/joi";

const envVarsSchema = Joi.object({
  APP_PORT: Joi.string(),
  APP_HOST: Joi.string(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_DATABASE: Joi.string(),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_AUTH_SOURCE: Joi.string(),
  ONLINE_DB_USER: Joi.string(),
  ONLINE_DB_PASSWORD: Joi.string(),
})
  .unknown(true)
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

export default {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  db: {
    database: envVars.DB_DATABASE,
    pass: envVars.DB_PASSWORD,
    user: envVars.DB_USERNAME,
    port: envVars.DB_PORT,
    host: envVars.DB_HOST,
    authSource: envVars.DB_AUTH_SOURCE,
    online_db_user: envVars.ONLINE_DB_USER,
    online_db_pass: envVars.ONLINE_DB_PASSWORD,
  },
};
