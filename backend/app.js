const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const userRouter = require("./routes/users");
const songRouter = require("./routes/songs");
app.use(cors({origin: true}));
app.use(bearerToken());
app.use(express.json());
app.use("/users", userRouter);
app.use("/songs", songRouter);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");


app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    // console.log("I'm here");
    // console.log(err);
    res.status(err.status || 500);
    const errMsg = err.errors;

    res.json({
        title: err.title,
        errors: errMsg,
    });
    console.log(errMsg);
});

module.exports = app;