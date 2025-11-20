const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPALL_CLIENT_ID,
  client_secret: process.env.PAYPALL_SECRET,
});

module.exports = paypal;
