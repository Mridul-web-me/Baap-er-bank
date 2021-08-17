function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input Field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})

// Handle Withdraw Button 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false)
    }
    if(withdrawAmount > currentBalance){
        const insufficientBalance = document.createElement('p');
        const newContent = document.createTextNode("Insufficient Balance");
        insufficientBalance.appendChild(newContent);
        return newContent;
    }
})