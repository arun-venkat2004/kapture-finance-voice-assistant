const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home / health check
app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Kapture Voice AI Agent Mock Server is running"
    });
});

// Verify customer
app.post("/verify_customer", (req, res) => {
    const { customer_name, verification_code } = req.body;

    if (verification_code === "1234") {
        return res.json({
            status: "success",
            verified: true,
            customer_name: customer_name || "Rahul Sharma"
        });
    }

    res.json({
        status: "failed",
        verified: false,
        message: "Customer verification failed"
    });
});

// Log Promise To Pay
app.post("/log_promise_to_pay", (req, res) => {
    const {
        customer_name,
        ptp_date,
        ptp_amount
    } = req.body;

    res.json({
        status: "success",
        message: "Promise to Pay recorded successfully",
        customer_name,
        ptp_date,
        ptp_amount
    });
});

// Send payment link
app.post("/send_payment_link", (req, res) => {
    const {
        customer_name,
        phone
    } = req.body;

    res.json({
        status: "success",
        message: "Payment link sent successfully",
        customer_name,
        phone,
        payment_link: "https://example.com/pay/8499"
    });
});

// Escalate to human agent
app.post("/escalate_to_agent", (req, res) => {
    const {
        customer_name,
        reason
    } = req.body;

    res.json({
        status: "success",
        message: "Call escalated to human agent",
        customer_name,
        reason
    });
});

// Mark call disposition
app.post("/mark_disposition", (req, res) => {
    const {
        status,
        notes
    } = req.body;

    res.json({
        status: "success",
        message: "Call disposition recorded",
        disposition: status,
        notes: notes || ""
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Kapture Voice AI Agent server running on http://localhost:${PORT}`);
});