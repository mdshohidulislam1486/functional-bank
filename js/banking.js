// deposit part 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the deposit input 
    const depositInput = document.getElementById('deposit-input');
    const depositValueText = depositInput.value;
    const depositValue = parseFloat(depositValueText);

    // get te deposit balance update 
    const depositBalanceInput = document.getElementById('deposit-total');
    const depositBalanceInner = depositBalanceInput.innerText;
    const depositBalance = parseFloat(depositBalanceInner)

    const depositTotal = depositValue + depositBalance;
    depositBalanceInput.innerText = depositTotal;

    // update main balance  

    const balanceInput = document.getElementById('balance-total');
    const balanceInner = balanceInput.innerText;
    const balanceNumValue = parseFloat(balanceInner)
    const newBalance = depositValue + balanceNumValue
    balanceInput.innerText = newBalance;  

    depositInput.value = '';

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    
})