function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalance() {
    const balanceElement = document.getElementById("balance");
    const Balance = balanceElement.innerText;
    return Number(Balance);
}


function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// machine id---->
function showOnly(id) {
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    const bonus = document.getElementById('bonus');
    const payBill = document.getElementById('pay-bill');
    // const transaction = document.getElementById('transaction');
    const history = document.getElementById('history');

    // all hide-------
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    bonus.classList.add("hidden");
    payBill.classList.add("hidden");
    // transaction.classList.add("hidden");
    history.classList.add("hidden");

    

    // show the section----
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
};

