document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFild = document.getElementById('deposit-fild');
    const newDepositSting = depositFild.value;
    const newDeposit =parseFloat(newDepositSting);
    const totalDepositElement = document.getElementById('total-deposit');
    const totalDepositPreviousSting = totalDepositElement.innerText;
    const totalDepositPrevious = parseFloat(totalDepositPreviousSting)
    const  totalDeposit = totalDepositPrevious + newDeposit;
    totalDepositElement.innerText = totalDeposit;

    // add total ammount
    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountElementsting = totalAmountElement.innerText;
    const previousTotalAmount = parseFloat(totalAmountElementsting);
    const CurrentTotalAmount = newDeposit + previousTotalAmount;
    totalAmountElement.innerText = CurrentTotalAmount;





    // last step
    depositFild.value ='';
  
    
})