import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3200",
      "http://localhost:4200",
      "http://localhost:5200",
    ],
  })
);

app.use("/api/login", (req, res, next) => {
  //   res.send("hello from index.js");

  const users = [
    {
      username: "Silviu",
      token: "123456",
    },
    // {
    //   username: "Diogo",
    //   token: "010101",
    // },
  ];
  return res.status(200).json({
    message: "User fetched succesfully!",
    users: users,
  });
});

export default app;
