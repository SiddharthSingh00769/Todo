const express = require("express");
const app = express();
port = 3000

app.use(express.json());

app.listen(port, () => {
    console.log(`Port ${port} is working fine`);
});

app.post("/todo", (req, res) => {

})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    
})