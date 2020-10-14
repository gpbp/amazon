import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product) {
        res.send(data.products.find(x => x._id === productId));
    }
    else {
        res.status
    }
    
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})
