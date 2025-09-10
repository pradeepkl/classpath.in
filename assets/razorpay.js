// Razorpay payment integration
document.getElementById("proceedPayment").addEventListener("click", function (e) {
e.preventDefault();

console.log("Payment button clicked");
// Collect details from form (optional if you want to pass to Razorpay)
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

console.log("Proceeding to payment with:", name, email, phone);

// Razorpay options
var options = {
    key: "rzp_test_RFzCn1s6DYlnt6", // replace with your Razorpay Key ID
    amount: 999900,     // in paise (₹9,999 → 999900)
    currency: "INR",
    name: "AWS Workshop",
    description: "Workshop Registration Fee",
    image: "your-logo.png", // optional
    prefill: {
    name: name,
    email: email,
    contact: phone
    },
    theme: {
    color: "#5c0dac"
    },
    handler: function (response) {
    alert("Payment successful! Razorpay Payment ID: " + response.razorpay_payment_id);
    // TODO: Call your backend to verify payment and save details
    }
};

var rzp1 = new Razorpay(options);
rzp1.open();
});

