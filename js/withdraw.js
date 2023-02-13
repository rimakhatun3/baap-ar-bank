document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFieldElement = document.getElementById('withdraw-fild');
    // add withadraw parsefloat
    const newWithdrawFieldSting = withdrawFieldElement.value;
  const newWithdrawAmount = parseFloat(newWithdrawFieldSting);

  
//   third step add withdraw total
const previousWithdrawAmountField = document.getElementById('withdraw-amount');
const previousWithdrawAmountSting = previousWithdrawAmountField.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawAmountSting);
const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
previousWithdrawAmountField.innerText = totalWithdrawAmount;

const totalAmountElement = document.getElementById('total-amount');
const totalAmountSting = totalAmountElement.innerText;
const newTotalAmount = parseFloat(totalAmountSting);
const totalAmount = newTotalAmount - newWithdrawAmount;
totalAmountElement.innerText = totalAmount;

withdrawFieldElement.value ='';
})