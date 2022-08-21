document.getElementById('btn-deposite').addEventListener('click', function () {

    const newDepositeAmount = getInputFieldValueById('deposite-field');
    const previousDepositeTotal = getElementValueById('deposite-total');

    const newDepositeAmountTotal = previousDepositeTotal + newDepositeAmount;
    setElementValue('deposite-total', newDepositeAmountTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setElementValue('balance-total', newBalanceTotal);
})