




function getTheInputValue(input){
    const depositInput = document.getElementById(input);
    const depositValueText = depositInput.value;
    const depositValue = parseFloat(depositValueText);
    depositInput.value = '';
    return depositValue;
}

function balanceUpdate(){
    const depositBalanceInput = document.getElementById('deposit-total');
    const depositBalanceInner = depositBalanceInput.innerText;
    const depositBalance = parseFloat(depositBalanceInner);
    
    return depositBalance;
}

// deposit part 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the deposit input 
   /*  const depositInput = document.getElementById('deposit-input');
    const depositValueText = depositInput.value;
    const depositValue = parseFloat(depositValueText); */
    const depositValue = getTheInputValue('deposit-input')
    getTheInputValue('deposit-input')
    // get te deposit balance update 

    /* const depositBalanceInput = document.getElementById('deposit-total');
    const depositBalanceInner = depositBalanceInput.innerText;
    const depositBalance = parseFloat(depositBalanceInner)
 */
    const depositBalance = balanceUpdate()
    const depositTotal = depositValue + depositBalance;
    depositBalanceInput.innerText = depositTotal;

    // update main balance  

    const balanceInput = document.getElementById('balance-total');
    const balanceInner = balanceInput.innerText;
    const balanceNumValue = parseFloat(balanceInner)
    const newBalance = depositValue + balanceNumValue
    balanceInput.innerText = newBalance;  

    

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    // get the withdraw input 
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValueText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawValueText); */
    const withdrawValue = getTheInputValue('withdraw-input')
    getTheInputValue('withdraw-input')
    // get te withdraw balance update 
    const withdrawBalanceInput = document.getElementById('withdraw-total');
    const inputBalanceInner = withdrawBalanceInput.innerText;
    const depositBalance = parseFloat(inputBalanceInner)

    const withdrawTotal = withdrawValue + depositBalance;
    withdrawBalanceInput.innerText = withdrawTotal;

    // update main balance 
    const balanceInput = document.getElementById('balance-total');
    const balanceInner = balanceInput.innerText;
    const balanceNumValue = parseFloat(balanceInner)
    const newBalance = balanceNumValue - withdrawValue;
    balanceInput.innerText = newBalance;  


})