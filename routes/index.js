const router = require("express").Router();

const employeeRoutes = require("./employees");
const accessLogRouters = require("./accessLogs");

router.use("/employees", employeeRoutes);
router.use("/accesslogs", accessLogRouters);

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>RFID Employee Access Management API</title>
        <style>
            body{
                font-family: Arial, Helvetica, sans-serif;
                background:#f4f7fa;
                margin:0;
                padding:0;
                color:#333;
            }
            .container{
                max-width:900px;
                margin:60px auto;
                background:white;
                padding:40px;
                border-radius:12px;
                box-shadow:0 8px 20px rgba(0,0,0,.15);
            }
            h1{
                color:#0d6efd;
                margin-bottom:10px;
            }
            h2{
                color:#555;
                margin-top:30px;
            }
            p{
                line-height:1.7;
            }
            ul{
                line-height:1.8;
            }
            .btn{
                display:inline-block;
                margin-top:20px;
                padding:12px 20px;
                background:#0d6efd;
                color:white;
                text-decoration:none;
                border-radius:8px;
                font-weight:bold;
            }
            .btn:hover{
                background:#0b5ed7;
            }
            footer{
                margin-top:40px;
                color:#777;
                font-size:14px;
                text-align:center;
            }
            code{
                background:#efefef;
                padding:2px 6px;
                border-radius:4px;
            }
        </style>
    </head>
    <body>

        <div class="container">

            <h1>RFID Employee Access Management API</h1>

            <p>
                Welcome to the RESTful API developed for
                <strong>CSE341 - Web Services</strong>.
            </p>

            <p>
                This application manages employee information and RFID access logs,
                providing complete CRUD functionality with MongoDB integration,
                data validation, error handling, and interactive Swagger documentation.
            </p>

            <h2>Features</h2>

            <ul>
                <li>Employee Management</li>
                <li>RFID Access Log Management</li>
                <li>RESTful CRUD Operations</li>
                <li>MongoDB Atlas Integration</li>
                <li>Input Validation</li>
                <li>Error Handling</li>
                <li>Interactive Swagger Documentation</li>
            </ul>

            <h2>Available Endpoints</h2>

            <ul>
                <li><code>GET /employees</code></li>
                <li><code>GET /accesslogs</code></li>
                <li><code>POST /employees</code></li>
                <li><code>POST /accesslogs</code></li>
            </ul>

            <a class="btn" href="/api-docs">
                Open API Documentation
            </a>

            <footer>
                Version 1.0.0 | CSE341 Project 2 | Developed by Ivan Chulde
            </footer>

        </div>

    </body>
    </html>
  `);
});

module.exports = router;