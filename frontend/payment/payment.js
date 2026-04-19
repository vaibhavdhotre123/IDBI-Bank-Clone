function makePayment() {
    let card = document.getElementById("cardNumber").value;
    let amount = document.getElementById("amount").value;

    if(card === "" || amount === "") {
        alert("Please fill all details");
        return;
    }

    alert("Payment Successful 💳");
}