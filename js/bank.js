document.getElementById("deposit-btn").addEventListener("click", function () {
  //get deposit input value
  const newDepositAmount = document.getElementById("deposit");
  const newDepositValue = newDepositAmount.value;
  const newDeposit = parseFloat(newDepositValue);

  //clear the value of new deposit amount
  newDepositAmount.value = "";

  //checking is the value of input number
  if (isNaN(newDeposit)) {
    alert("please insert a valid number");
    return;
  }

  // set the deposit input value to the total deposit
  const previousDepositAmount = document.getElementById("deposit-amount");
  const previousDepositValue = previousDepositAmount.innerText;
  const previousDeposit = parseFloat(previousDepositValue);

  const totalDeposit = previousDeposit + newDeposit;
  previousDepositAmount.innerText = totalDeposit;

  //set the total balance amount
  const previousBalanceAmount = document.getElementById("balance-amount");
  const previousBalanceValue = previousBalanceAmount.innerText;
  const previousBalance = parseFloat(previousBalanceValue);
  const totalBalance = previousBalance + newDeposit;
  previousBalanceAmount.innerText = totalBalance;
});

 /*---------------------- calculating the value of the withdraw ---------------------*/

document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get the withdraw amount and convert value string to number.
  const newWithdrawAmount = document.getElementById("withdraw");
  const newWithdrawValue = newWithdrawAmount.value;
  const newWithdraw = parseFloat(newWithdrawValue);

  //clear the withdraw amount input value
  newWithdrawAmount.value = "";

  //checking is the value of input number
  if (isNaN(newWithdraw)) {
    alert("please insert a valid number");
    return;
  }

  // get the withdraw value and convert it to number.
  const previousWithdrawAmount = document.getElementById("withdraw-amount");
  const previousWithDrawValue = previousWithdrawAmount.innerText;
  const previousWithdraw = parseFloat(previousWithDrawValue);

  //calculate total balance amount after withdraw.
  const previousBalanceAmount = document.getElementById("balance-amount");
  const previousBalanceValue = previousBalanceAmount.innerText;
  const previousBalance = parseFloat(previousBalanceValue);

  //   showing the error message for wrong input
  if (newWithdraw > previousBalance) {
    alert("Your balance isn't sufficient");
    return;
  }

  //calculate the new withdraw amount for previous withdraw amount.
  const totalWithdraw = newWithdraw + previousWithdraw;
  previousWithdrawAmount.innerText = totalWithdraw;

  const totalBalance = previousBalance - newWithdraw;
  previousBalanceAmount.innerText = totalBalance;
});
