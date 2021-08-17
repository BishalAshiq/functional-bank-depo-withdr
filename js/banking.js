// function doubleIt(num){
//    const result = num * 2;
//    return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(){
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value; 
   const depositAmount = parseFloat(depositAmountText);
   depositInput.value ='';
   return depositAmount;
}



document.getElementById('deposit-button').addEventListener('click', function(){
// console.log('deposit button clicked');

   // const depositInput = document.getElementById('deposit-input');
   // const depositAmountText = depositInput.value; 
   // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();
    
   //    console.log(depositAmount); 
//   get current deposit
   const depositTotal = document.getElementById('deposit-total');
   const depositTotalText = depositTotal.innerText;
   const previousDepositTotal = parseFloat(depositTotalText);
   depositTotal.innerText = previousDepositTotal + depositAmount;
// Update Balance
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   balanceTotal.innerText = previousBalanceTotal + depositAmount;
// console.log(depositTotalText);
   
})

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
// console.log('whithdraw clicked')
const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmounText = withdrawInput.value;
const withdrawAmount = parseFloat(withdrawAmounText);
// console.log(withdrawAmounText);
// update withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawTotalText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

// update balance input field
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
withdrawInput.value = '';
})