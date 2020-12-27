require("dotenv").config();

import Joi from "@hapi/joi";

const envVarsSchema = Joi.object({
  PORT: Joi.string(),
  APP_HOST: Joi.string(),
  NODE_ENV: Joi.string(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_DATABASE: Joi.string(),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_AUTH_SOURCE: Joi.string(),
  ONLINE_DB_USER: Joi.string(),
  ONLINE_DB_PASSWORD: Joi.string(),
  ONLINE_DB_DATABASE: Joi.string()
})
  .unknown(true)
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

export default {
  host: process.env.APP_HOST,
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  db: {
    database: envVars.DB_DATABASE,
    pass: envVars.DB_PASSWORD,
    user: envVars.DB_USERNAME,
    port: envVars.DB_PORT,
    host: envVars.DB_HOST,
    authSource: envVars.DB_AUTH_SOURCE,
    online_db_user: envVars.ONLINE_DB_USER,
    online_db_pass: envVars.ONLINE_DB_PASSWORD,
    online_db_database: envVars.ONLINE_DB_DATABASE,
  },
};
