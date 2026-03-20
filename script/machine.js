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


const addMoneyBtn = document.getElementById('addMoneyBtn');
const cashoutBtn = document.getElementById('cashoutBtn');
const transferBtn = document.getElementById('transferBtn');
const bonusBtn = document.getElementById('bonusBtn');
const payBtn = document.getElementById('payBtn');
const transactionBtn = document.getElementById('transactionBtn');

document.getElementById('allBtn').addEventListener('click', (event) => {
    const btn = event.target.closest('button');

    if (btn == addMoneyBtn) {
        addMoneyBtn.classList.add('btn-primary');
        cashoutBtn.classList.remove('btn-primary');
        transferBtn.classList.remove('btn-primary');
        bonusBtn.classList.remove('btn-primary');
        payBtn.classList.remove('btn-primary');
        transactionBtn.classList.remove('btn-primary');
    }
    else if (btn == cashoutBtn) {
        addMoneyBtn.classList.remove('btn-primary');
        cashoutBtn.classList.add('btn-primary');
        transferBtn.classList.remove('btn-primary');
        bonusBtn.classList.remove('btn-primary');
        payBtn.classList.remove('btn-primary');
        transactionBtn.classList.remove('btn-primary');
    }
    else if (btn == transferBtn) {
        addMoneyBtn.classList.remove('btn-primary');
        cashoutBtn.classList.remove('btn-primary');
        transferBtn.classList.add('btn-primary');
        bonusBtn.classList.remove('btn-primary');
        payBtn.classList.remove('btn-primary');
        transactionBtn.classList.remove('btn-primary');
    }
    else if (btn == bonusBtn) {
        addMoneyBtn.classList.remove('btn-primary');
        cashoutBtn.classList.remove('btn-primary');
        transferBtn.classList.remove('btn-primary');
        bonusBtn.classList.add('btn-primary');
        payBtn.classList.remove('btn-primary');
        transactionBtn.classList.remove('btn-primary');
    }
    else if (btn == payBtn) {
        addMoneyBtn.classList.remove('btn-primary');
        cashoutBtn.classList.remove('btn-primary');
        transferBtn.classList.remove('btn-primary');
        bonusBtn.classList.remove('btn-primary');
        payBtn.classList.add('btn-primary');
        transactionBtn.classList.remove('btn-primary');
    }
    else if (btn == transactionBtn) {
        addMoneyBtn.classList.remove('btn-primary');
        cashoutBtn.classList.remove('btn-primary');
        transferBtn.classList.remove('btn-primary');
        bonusBtn.classList.remove('btn-primary');
        payBtn.classList.remove('btn-primary');
        transactionBtn.classList.add('btn-primary');
    }
})

