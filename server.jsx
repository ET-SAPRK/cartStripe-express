const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.SK);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.post("/checkout", async (req, res) => {

    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://127.0.0.1:5173/success",
        cancel_url: "http://127.0.0.1:5173/cancle"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));


