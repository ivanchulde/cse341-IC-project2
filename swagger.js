const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CSE341 Project 2 API",
    description: "API for Access Logs Management",
    version: "1.0.0"
  },
  //Render
  host: "cse341-ic-project2.onrender.com",
  schemes: ["https"]
  //Local
  //host: "localhost:8080",
  //schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);