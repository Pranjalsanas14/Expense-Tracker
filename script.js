const addExpenseBtn = document.getElementById('addExpenseBtn');
const addIncomeBtn = document.getElementById('addIncomeBtn');
const amountInput = document.getElementById('amountInput');
const categoryInput = document.getElementById('categoryInput');
const expenseList = document.getElementById('expenseList');
const totalIncome = document.getElementById('totalIncome');
const totalExpenses = document.getElementById('totalExpenses');
const balance = document.getElementById('balance');

let income = 0;
let expenses = [];

function updateSummary() {
    const totalExpenseAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const totalBalance = income - totalExpenseAmount;
    
    totalExpenses.textContent = totalExpenseAmount.toFixed(2);
    balance.textContent = totalBalance.toFixed(2);
}

addExpenseBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value.trim();

    if (amount && category) {
        expenses.push({ amount, category });
        const li = document.createElement('li');
        li.textContent = `${category}: $${amount.toFixed(2)}`;
        expenseList.appendChild(li);
        
        updateSummary();
    }

    amountInput.value = '';
    categoryInput.value = '';
});

addIncomeBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (amount) {
        income += amount;
        totalIncome.textContent = income.toFixed(2);
        
        updateSummary();
    }

    amountInput.value = '';
});
