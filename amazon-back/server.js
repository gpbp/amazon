import express from 'express';
import data from './data';

const app = express();

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/", (req, res) => {
    res.send("It's work");
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})
