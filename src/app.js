import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(hpp());
app.use(helmet());

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Welcome to Free Courses App!!!",
    });
});

export default app;
