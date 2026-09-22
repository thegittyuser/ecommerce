import express from "express";
import cors from "cors";
import DbConnect from "./config/dbconn.js";
import userRouter from "./routes/user.route.js";
import productsRouter from "./routes/products.route.js";

const app = express();
const PORT = 3000; // Added 'const' to declare the variable

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log("default page");
  res.send("Hello World"); // Sends a response back to the browser
});

app.use("/", userRouter);
app.use("/", productsRouter);
DbConnect();

const startServer = () => {
  app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}.`);
  });
};

startServer();
