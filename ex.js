function addExpense() {
    var categoryInput = document.getElementById('category');
    var amountInput = document.getElementById('amount');
    var expensesTableBody = document.getElementById('expenses-table-body');
    var totalAmountDisplay = document.getElementById('total-amount');

    var category = categoryInput.value.trim();
    var amount = parseFloat(amountInput.value.trim());

    if (!category || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid category and amount.');
        return;
    }

   
    var newRow = expensesTableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = category;
    cell2.textContent = 'Rs' + amount.toFixed(2);

    
    var currentTotal = parseFloat(totalAmountDisplay.textContent);
    totalAmountDisplay.textContent = 'Rs' + (currentTotal + amount).toFixed(2);

    categoryInput.value = '';
    amountInput.value = '';
}