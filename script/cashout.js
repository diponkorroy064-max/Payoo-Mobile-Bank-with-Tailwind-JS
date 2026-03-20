document.getElementById('cashout-btn').addEventListener('click', function (e) {
    e.preventDefault();

    // get the agent number and validate----
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }

    // get the amount, validate, convert to number----
    const cashoutAmount = getValueFromInput('cashout-amount');

    // get balance----
    const currentBalance = getBalance();
    
    // calculate new balance----
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    // console.log(newBalance);

    // get the pin and varify---
    const cashoutPin = getValueFromInput("cashout-pin");
    if (cashoutPin === "1234") {
        // true-->show alert----> set balance
        alert("Cashout Successful");
        setBalance(newBalance);

        // 1. get history-container id---
        const history = document.getElementById("history-container");

        // 2. create new div---
        const newHistory = document.createElement("div");

        // 3. add inner html into new div---
        newHistory.innerHTML = `
            <div class="transaction-card p-2 bg-white rounded-md shadow">
                Cashout ${cashoutAmount} tk Successful to ${cashoutNumber}, at 
            ${new Date()}
            </div>
        `;
        // 4. history container e newDiv append  korbo---
        history.appendChild(newHistory);
    }
    else {
        // false---> show alert----> set return
        alert("Invalid Pin");
        return;
    }
})





// document.getElementById('cashout-btn').addEventListener('click', function () {
//     // get the agent number and validate---
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if (cashoutNumber !== "01234567891") {
//         alert('Invalid Agent Number');
//         return;
//     }

//     // get the amount, validate, convert to number---
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;

//     // get the current balance, validate, convert to number---
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     // calculate new balance---
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }
//     // console.log(newBalance);

//     // get the pin and varify---
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value;
//     if (cashoutPin === "1234") {
//         // true-->show alert----> set balance
//         alert('Cashout Successful!');
//         console.log(newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         // false---> show alert----> set return
//         alert('Invalid Pin');
//         return;
//     }
// })


