// api/create-order.js

export default async function handler(req, res) {
  const auth = Buffer.from(
    `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
  ).toString("base64");

  const response = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: 1, // ₹499 in paise
      currency: "INR",
      receipt: "receipt_001"
    })
  });

  const order = await response.json();
  res.status(200).json(order);
}
