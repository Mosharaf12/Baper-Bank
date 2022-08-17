// step -1 add event listener to the deposit button
document.getElementById('deposit').addEventListener('click', function(){
    // step-2 get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositAmount = document.getElementById('deposit-amount');
    const newAmountString = depositAmount.value ;
    const newAmount = parseFloat(newAmountString);
    console.log(typeof newAmount);

    // step: 3 get the current deposit tatal
    // step-4 use the innerText 
    const totalDeposit = document.getElementById("deposit-total");
    const  previousTotalString =totalDeposit.innerText;
    const previousTotal = parseFloat(previousTotalString);

    console.log(typeof previousTotal)

    // step - 4 add number to set teh total deposit 
    const currentDepositTotal = previousTotal + newAmount;

    totalDeposit.innerText = currentDepositTotal;

    // step-5 get ballance current total
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newAmount;
    // set the balance total  
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 clear the deposit field 
    depositAmount.value ='';
    
})