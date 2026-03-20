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
    const currentBalance = getBalance();

    const newBalance = currentBalance + Number(amount);
    // console.log(newBalance);

    const pin = getValueFromInput('add-money-pin');
    
    if (pin === "1234") {
        // alert('Add Money Successful');
        alert(`Successfully added ${amount} tk into ${bankAccount} at ${new Date()}`);
        
        setBalance(newBalance);

        // 1. get history-container id---
        const history = document.getElementById("history-container");

        // 2. create new div---
        const newHistory = document.createElement("div");

        // 3. add inner html into new div---
        newHistory.innerHTML = `
            <div class="transaction-card p-2 shadow rounded-md bg-white">
                Successfully added ${amount} tk into ${bankAccount}, account number ${accountNumber} at 
            ${new Date()}
            </div>
        `;

        // 4. history container e newDiv append  korbo---
        history.appendChild(newHistory);
    }
    
    else {
        alert('Invalid Pin');
        return;
    }
})

