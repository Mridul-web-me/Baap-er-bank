document.getElementById('diposit-button').addEventListener('click', function(){
    const dipositInputText = document.getElementById('deposit-input');
    const dipositInput = dipositInputText.value;
    const dipositAmount = parseFloat(dipositInput);

    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositTotal = dipositTotal.innerText;
    const dipositTotalAmount = parseFloat(previousDipositTotal);
   
    const diposit = dipositAmount + dipositTotalAmount;
    dipositTotal.innerText = diposit;

    const balanceText = document.getElementById('balance-total');
    const previousBalance = balanceText.innerText;
    const BalanceTotal = parseFloat(previousBalance);
    const balanceTotalAmount = BalanceTotal + dipositAmount

    balanceText.innerText = balanceTotalAmount;
    dipositInputText.value = "";
    
})
// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputText = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputText.value;
    const withdrawAmount = parseFloat(withdrawInput);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotal = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(previouswithdrawTotal);
   
    const withdraw = withdrawAmount + withdrawTotalAmount;
    withdrawTotal.innerText = withdraw;

    const balanceText = document.getElementById('balance-total');
    const previousBalance = balanceText.innerText;
    const BalanceTotal = parseFloat(previousBalance);
    const balanceTotalAmount = BalanceTotal - withdrawAmount

    balanceText.innerText = balanceTotalAmount;
    withdrawInputText.value = "";
    
})