const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE341 Project 2 API",
    description: "API for Access Logs Management",
  },
  host: "localhost:8080",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);