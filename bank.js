document.getElementById('diposit-button').addEventListener('click', function(){
// Diposit
    const dipositInputText = document.getElementById('deposit-input');
    const dipositAmount = dipositInputText.value;
    const dipositInputAmount = parseFloat(dipositAmount);
    
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositTotal = dipositTotal.innerText
    const previousDipositAmount = parseFloat(previousDipositTotal);

    const dipositTotalAmount = dipositInputAmount + previousDipositAmount;
    
    dipositTotal.innerText = dipositTotalAmount;

    // Update Balance
    const balanceInputText = document.getElementById('balance-total');
    const balanceAmount = balanceInputText.innerText;
    const balanceInputAmount = parseFloat(balanceAmount);

    const balanceAmountTotal = balanceInputAmount + dipositInputAmount;
    balanceInputText.innerText = balanceAmountTotal;

    dipositInputText.value = ''; 
})


document.getElementById('withdraw-button').addEventListener('click', function(){
    // Withdraw
    const withdrawInputText = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInputText.value;
    const withdrawinputAmount = parseFloat(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawTotal);
    const withdrawTotalAmount = withdrawinputAmount + previousWithdrawAmount;

    withdrawTotal.innerText = withdrawTotalAmount;

    withdrawInputText.value = '';

    // Withdraw update Balance

    const balanceInputText = document.getElementById('balance-total');
    const balanceAmount = balanceInputText.innerText;
    const balanceInputAmount = parseFloat(balanceAmount);

    const balanceTotalAmount = balanceInputAmount - withdrawinputAmount;
    balanceInputText.innerText = balanceTotalAmount;
})