document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount reposited
    const depositInput = document.getElementById('deposit-input');
    const depositamounttext = depositInput.value;

    const depositamount = parseFloat(depositamounttext)
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const priveousAmounttext = depositTotal.innerText;
    const priveasAmaount = parseFloat(priveousAmounttext);
    const newDepsitAmaount = priveasAmaount+depositamount;

    depositTotal.innerText = newDepsitAmaount;
 //update account balenc
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotaltxt = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotaltxt);
    const newBalance = previousBalanceTotal + depositamount
    balanceTotal.innerText = newBalance
    //clear depossit input
    depositInput.value = ''
});
//hendel whidrow event hendelar
document.getElementById('whitdrow-btn').addEventListener('click',function(){
    const whitdrowInput = document.getElementById('whitdrow-input');
    const whitdrowAmountText = whitdrowInput.value;
    const newWithdrawAmount = parseFloat(whitdrowAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdro-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balanc
    const balanceTotal = document.getElementById('balance-total');
    const pbt = balanceTotal.innerText;
    const preveousbalanceTotal = parseFloat(pbt);
    const newBalanceTotal = preveousbalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear input
    whitdrowInput.value = ''
})