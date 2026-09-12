import express from "express";

const app = express();
const PORT = 3000; // Added 'const' to declare the variable



app.get("/", function (req, res) {
  console.log("default page");
  res.send("Hello World"); // Sends a response back to the browser
});

const startServer = () => {
  app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}.`);
  });
};

startServer();
