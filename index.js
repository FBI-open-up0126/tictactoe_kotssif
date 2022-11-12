const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { execFileSync } = require("child_process");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/analysis", (req, res) => {
    fs.writeFileSync("./kotssif/input.json", JSON.stringify(req.body));

    execFileSync("./kotssif/kotssif.exe", ["./kotssif/input.json", "-o", "./kotssif/output.json"]);

    const output = fs.readFileSync("./kotssif/output.json");

    res.send(JSON.parse(output));
});

app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(8080, () => {
    console.log("Server opened on port 8080");
});
