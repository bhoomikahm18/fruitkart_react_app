const router = require('express').Router();

const data = {
    productItems: [
        {
            id: "1",
            name: "Apple Fresh",
            price: 499,
            image: "./images/apple.jpg"
        },
        {
            id: "2",
            name: "Banana",
            price: 99,
            image: "./images/banana.jpg"
        },
        {
            id: "3",
            name: "Mango",
            price: 299,
            image: "./images/mango.jpg"
        },
        {
            id: "4",
            name: "Kiwi",
            price: 699,
            image: "./images/kiwi.jpg"
        },
        {
            id: "5",
            name: "Pineapple",
            price: 199,
            image: "./images/pineapple.jpg"
        }
        
    ]
}

router.get('/products', (req, res) =>{
    res.json(data);
});

module.exports = router;