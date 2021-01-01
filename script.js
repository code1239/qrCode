const express = require("express");
const app = express();
const DataStore = require("nedb");

app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.static("files"));
app.use(express.json({ limit: "30mb" }));

const database = new DataStore("database.db");
database.loadDatabase();

app.post("/api",(req,res) => {

var data = req.body;
  var btn = data["btn"]
  var tableNumara = data["tableNo"];
  if(btn == "check"){
   database.update({ tableNo:  `${tableNumara}` }, { tableNo: `${tableNumara}` , order: "not ordered", check: "check",btn:"check"}, {}, function (err, numReplaced) {
     console.log("table",`${tableNumara}`,"wants check")
     console.log("---------------------------");
});

  }
    else if(btn == "submit"){
      console.log(data);
      database.insert(data);
      console.log("table",`${tableNumara}`,"added to database")
      console.log("---------------------------");
    }
     else if(btn == "order"){
   database.update({ tableNo:  `${tableNumara}` }, { tableNo: `${tableNumara}` , order: "ordered", check: "no check",btn:"order"}, {}, function (err, numReplaced) {
     console.log("table",`${tableNumara}`,"wants order")
     console.log("---------------------------");
});

  }
     
  });
    



