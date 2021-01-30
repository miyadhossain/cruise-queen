function handleTicketChange (ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

function calculateTotal () {
    const firstCount = getInputValue ('first');
    const secondCount = getInputValue ('second');

    totalPrice = firstCount * 150 + secondCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue (ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// booking button event handler
const bookingBtn = document.getElementById('bookBtn');
bookingBtn.addEventListener('click', function() {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const trasactionArea = document.getElementById('confirmation');
    trasactionArea.style.display = 'block';

})

// user meeseage
const inputText = document.getElementById('first-count').value;
    document.getElementById('ticketShow') = inputText;