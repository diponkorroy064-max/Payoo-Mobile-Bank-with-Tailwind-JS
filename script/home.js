document.getElementById('cashout-btn').addEventListener('click', function () {
    // get the agent number and validate---
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    if (cashoutNumber !== "01234567891") {
        alert('Invalid Agent Number');
        return;
    }

    // get the amount, validate, convert to number---
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;

    // get the current balance, validate, convert to number---
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    // calculate new balance---
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    // console.log(newBalance);

    // get the pin and varify---
    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    if (cashoutPin === "1234") {
        // true-->show alert----> set balance
        alert('Cashout Successful!');
        console.log(newBalance);
        balanceElement.innerText = newBalance;
    }
    else {
        // false---> show alert----> set return
        alert('Invalid Pin');
        return;
    }
})
