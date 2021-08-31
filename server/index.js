const express = require('express');
const cors = require('cors');
const app = express ();
const SERVER_PORT = 4004;
const ctrl = require("./controller/ctrl");

app.use(express.json());
app.use(cors());

app.get("/api/houses", ctrl.getHouses);
app.post("/api/houses/", ctrl.createHouses);
app.put("/api/houses/:id", ctrl.updateHouses);
app.delete("/api/houses/:id", ctrl.deleteHouses);

app.listen(SERVER_PORT, (req, res) => console.log(`Server running on port ${SERVER_PORT}`)); 


