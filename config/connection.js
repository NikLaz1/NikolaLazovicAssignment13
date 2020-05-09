// connect Node to MYSQL
// Export connection
var mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //when used on local machine
  // connection = mysql.createConnection({
  //   host: "localhost",
  //   port: 3306,
  //   user: "nik1",
  //   password: "Welcome",
  //   database: "burgers_db"
  // });

  //when used on heroku
  connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    port: 3306,
    user: "ba9b03db7fbd68",
    password: "eb46dbb9",
    database: "heroku_aad9294ba946023"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;