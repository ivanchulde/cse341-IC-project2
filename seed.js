require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();

    const db = client.db("rfid-access-api");

    const employees = db.collection("employees");
    const accessLogs = db.collection("accessLogs");

    // Clean previous data
    await employees.deleteMany({});
    await accessLogs.deleteMany({});

    // ==========================
    // Employees
    // ==========================

    const employeeData = [
      {
        employeeId: "EMP001",
        rfidTag: "RFID0001",
        firstName: "John",
        lastName: "Smith",
        department: "Technology",
        position: "Systems Analyst",
        email: "john.smith@example.com",
        phone: "0991111111",
        status: "Active",
        hireDate: "2024-01-15"
      },
      {
        employeeId: "EMP002",
        rfidTag: "RFID0002",
        firstName: "Emma",
        lastName: "Johnson",
        department: "Operations",
        position: "Operator",
        email: "emma.johnson@example.com",
        phone: "0991111112",
        status: "Active",
        hireDate: "2023-11-10"
      },
      {
        employeeId: "EMP003",
        rfidTag: "RFID0003",
        firstName: "Michael",
        lastName: "Brown",
        department: "Technology",
        position: "Network Engineer",
        email: "michael.brown@example.com",
        phone: "0991111113",
        status: "Active",
        hireDate: "2022-05-20"
      },
      {
        employeeId: "EMP004",
        rfidTag: "RFID0004",
        firstName: "Sophia",
        lastName: "Davis",
        department: "Administration",
        position: "Secretary",
        email: "sophia.davis@example.com",
        phone: "0991111114",
        status: "Active",
        hireDate: "2021-09-12"
      },
      {
        employeeId: "EMP005",
        rfidTag: "RFID0005",
        firstName: "Daniel",
        lastName: "Wilson",
        department: "Security",
        position: "Security Officer",
        email: "daniel.wilson@example.com",
        phone: "0991111115",
        status: "Active",
        hireDate: "2020-08-08"
      },
      {
        employeeId: "EMP006",
        rfidTag: "RFID0006",
        firstName: "Olivia",
        lastName: "Martinez",
        department: "Human Resources",
        position: "HR Analyst",
        email: "olivia.martinez@example.com",
        phone: "0991111116",
        status: "Active",
        hireDate: "2024-03-01"
      },
      {
        employeeId: "EMP007",
        rfidTag: "RFID0007",
        firstName: "William",
        lastName: "Taylor",
        department: "Finance",
        position: "Accountant",
        email: "william.taylor@example.com",
        phone: "0991111117",
        status: "Active",
        hireDate: "2022-07-17"
      },
      {
        employeeId: "EMP008",
        rfidTag: "RFID0008",
        firstName: "Ava",
        lastName: "Anderson",
        department: "Technology",
        position: "Software Developer",
        email: "ava.anderson@example.com",
        phone: "0991111118",
        status: "Active",
        hireDate: "2023-04-18"
      },
      {
        employeeId: "EMP009",
        rfidTag: "RFID0009",
        firstName: "James",
        lastName: "Thomas",
        department: "Operations",
        position: "Dispatcher",
        email: "james.thomas@example.com",
        phone: "0991111119",
        status: "Active",
        hireDate: "2021-06-21"
      },
      {
        employeeId: "EMP010",
        rfidTag: "RFID0010",
        firstName: "Mia",
        lastName: "White",
        department: "Management",
        position: "Director",
        email: "mia.white@example.com",
        phone: "0991111120",
        status: "Active",
        hireDate: "2019-02-10"
      }
    ];

    await employees.insertMany(employeeData);

    // ==========================
    // Access Logs
    // ==========================

    const logs = [];

    const dates = [
      "2026-07-14",
      "2026-07-15",
      "2026-07-16",
      "2026-07-17",
      "2026-07-18",
      "2026-07-19",
      "2026-07-20"
    ];

    employeeData.forEach((emp) => {
      dates.slice(0, 3).forEach((date) => {
        logs.push({
          employeeId: emp.employeeId,
          rfidTag: emp.rfidTag,
          employeeName: `${emp.firstName} ${emp.lastName}`,
          accessDate: date,
          entryTime: "07:55",
          exitTime: "17:05",
          accessPoint: "Main Entrance",
          accessType: "Entry",
          result: "Granted"
        });
      });
    });

    await accessLogs.insertMany(logs);

    console.log(`Inserted ${employeeData.length} employees`);
    console.log(`Inserted ${logs.length} access logs`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seedDatabase();