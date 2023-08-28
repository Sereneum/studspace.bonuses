const express = require("express");
const {json} = require("express");
const app = express();

// Create GET request
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.post("/api/message", (req, res) => {
    const answer = {
        text: "?"
    }
    res.json(answer)
})


app.listen(5000, () => {
    console.log("Running on port 5000.");
});

module.exports = app;