const express = require("express");
const cors = require("cors");
const mongodb = require("./database/connect");
const routes = require("./routes");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");


app.use(cors());
app.use(express.json());
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