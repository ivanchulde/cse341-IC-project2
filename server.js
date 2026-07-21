require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const mongodb = require("./database/connect");
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

const app = express();




app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT || 8080;


mongodb.initDb((err) => {

    if (err) {
        console.log(err);
    } else {

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

    }

});