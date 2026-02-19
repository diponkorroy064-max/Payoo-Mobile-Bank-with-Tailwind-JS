document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    // 1. get bank account---
    const bankAccount = getValueFromInput('add-money-bank');
    if (bankAccount === "Select Bank") {
        alert('Please select a Bank');
        return;
    }

    // 2. get bank account number---
    const accountNumber = getValueFromInput('add-money-number');
    if (accountNumber.length !== 11) {
        alert('Invalid Account Number');
    }

    // 3. get amount---
    const amount = getValueFromInput('add-money-amount');

    const newBalance = getBalance() + Number(amount);
    // console.log(newBalance);

    const pin = getValueFromInput('add-money-pin');
    if (pin === "1234") {
        alert('Add Money Successful');
        setBalance(newBalance);
    }
    else {
        alert('Invalid Pin');
        return;
    }
})