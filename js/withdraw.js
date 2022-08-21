document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const newWithdrawAmountTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValue('withdraw-total', newWithdrawAmountTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValue('balance-total', newBalanceTotal);
})