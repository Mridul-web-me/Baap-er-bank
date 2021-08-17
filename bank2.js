/* document.getElementById('diposit-button').addEventListener('click',function(){
    const dipositInputText = document.getElementById('deposit-input');
    const dipositInput = dipositInputText.value;
    const dipositAmount = parseFloat(dipositInput);

    const dipositvalue = document.getElementById('diposit-total');
    const PreviousDipositValue = dipositvalue.innerText ;
    const previousDipositAmount = parseFloat(PreviousDipositValue);
    
   const dipositValueTotal = dipositAmount + previousDipositAmount;

   dipositvalue.innerText = dipositValueTotal;

//    update balance
    const balanceValueText = document.getElementById('balance-total');
    const previousBalanceValue = balanceValueText.innerText;
    const balance = parseFloat(previousBalanceValue);

    const totalBalance = balance + dipositAmount;
    balanceValueText.innerText = totalBalance;

    dipositInputText.value = '';
})

// Withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const dipositInputText = document.getElementById('withdraw-input');
    const dipositInput = dipositInputText.value;
    const dipositAmount = parseFloat(dipositInput);

    const dipositvalue = document.getElementById('withdraw-total');
    const PreviousDipositValue = dipositvalue.innerText ;
    const previousDipositAmount = parseFloat(PreviousDipositValue);
    
   const dipositValueTotal = dipositAmount + previousDipositAmount;

   dipositvalue.innerText = dipositValueTotal;

//    update balance
    const balanceValueText = document.getElementById('balance-total');
    const previousBalanceValue = balanceValueText.innerText;
    const balance = parseFloat(previousBalanceValue);

    const totalBalance = balance - dipositAmount;
    balanceValueText.innerText = totalBalance;

    dipositInputText.value = '';
}) */