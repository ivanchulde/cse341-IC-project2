const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE341 Project 2 API",
    description: "API for Access Logs Management",
  },
  host: "https://cse341-ic-project2.onrender.com/",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);