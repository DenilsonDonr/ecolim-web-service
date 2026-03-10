import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

app.listen(3005, () => {
    console.log("Server running on port 3005");
});