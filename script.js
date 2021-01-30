// ticket count calulate
function calculateTicketCount(isIncrease, clickFrom) {
    // ticket count increase
    if (clickFrom == 'firstClass') {
        const firstClassTicketInput = document.getElementById('first-count');
        if (!isIncrease) {
            if (firstClassTicketInput.value != 0) {
                firstClassTicketInput.value--;
            }
        }
        else {
            firstClassTicketInput.value++;
        }

    }
    // ticket count decrease
    else {
        const economyClassTicketInput = document.getElementById('second-count');
        if (!isIncrease) {
            if (economyClassTicketInput.value != 0) {
                economyClassTicketInput.value--;
            }
        }
        else {
            economyClassTicketInput.value++;
        }
    }
    calculateTotal();
}

// total cost calculate
function calculateTotal() {
    const firstClassTicketInput = document.getElementById('first-count');
    const economyClassticketInput = document.getElementById('second-count');
    let subTotal = (parseInt(firstClassTicketInput.value) * 150) + (parseInt(economyClassticketInput.value) * 100);
    let totalVat = (subTotal * 10) / 100;
    document.getElementById('vat-amount').innerText = '$' + totalVat;
    document.getElementById('subtotal-price').innerText = '$' + subTotal;
    document.getElementById('grand-total').innerText = '$' + (subTotal + totalVat);
}


// booking button event handler
const bookingBtn = document.getElementById('bookBtn');
bookingBtn.addEventListener('click', function () {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const trasactionArea = document.getElementById('confirmation');
    trasactionArea.style.display = 'block';
    // user message info
    document.getElementById('ticketCountFirst').innerText = document.getElementById('first-count').value;
    document.getElementById('ticketCountSecond').innerText = document.getElementById('second-count').value;
    document.getElementById('totalAmount').innerText = document.getElementById('grand-total').innerText;

})