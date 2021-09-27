const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const stripe = require("stripe")('YOUR_KEY');
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.post("/payment", async (req, res) => {
  console.log(req.headers.origin);

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      // mode: "payment",
      success_url: `http://localhost:3001/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3001/?canceled=true`,
    });
    // console.log(session);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }

  // const idempontencykey = uuidv4();

  // return stripe.customers
  //   .create({
  //     email: token.email,
  //     source: token.id,
  //   })
  //   .then((customer) => {
  //     return stripe.charges.create(
  //       {
  //         amount: product.price * 100,
  //         currency: "usd",
  //         customer: customer.id,
  //         receipt_email: token.email,
  //         description: product.name,
  //         shipping: {
  //           name: token.card.name,
  //           address: {
  //             country: token.card.address_country,
  //           },
  //         },
  //       },
  //       { idempontencykey }
  //     );
  //   })
  //   .then((response) => res.status(200).json(response))
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.listen(5000, () => {
  console.log("Connected");
});
