import "dotenv/config";
import express from "express";
import { routes } from "./routes/index.js";
import { AppError } from "./utils/AppError.js";
const app = express();
app.use(json());

app.use(routes);

app.use((err, req, res, nxt) => {
  if(err instanceof AppError) {
    return res.status(err.code).json({
      "status": "error",
      "message": "err.message"
    });
  }

  return res.status(500).json({
    "status": "error",
    "message": "internal error"
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server status [ONLINE].:"));