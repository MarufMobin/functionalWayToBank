// input Field Grap Purpuss
function inputField(fieldId){
    const fieldInputId =  document.getElementById(fieldId);
    const fieldInputValue = parseFloat(fieldInputId.value);
    fieldInputId.value = '';
    return fieldInputValue;
};

// id Catch and amount update
function valueUpdate( valueId , amount ){
    const valueInputId = document.getElementById(valueId);
    const valueInputNumber = parseFloat(valueInputId.innerText);
    const updateValueAmount = valueInputNumber + amount;
    valueInputId.innerText = updateValueAmount;
};

// calculation Total Amount
function totalBalance( amount , isset ){
    const totalBalanceField = document.getElementById('balance-total');
    const totalTexToNum = parseFloat(totalBalanceField.innerText);
    let newTotalBalance;
    if( isset == true ){
        newTotalBalance = totalTexToNum + amount
        totalBalanceField.innerText = newTotalBalance;
    }else{
        newTotalBalance = totalTexToNum - amount
        totalBalanceField.innerText = newTotalBalance;
    }
    
}

// deposit Button
document.getElementById('deposit-button').addEventListener('click',function(){
   const amount =  inputField('deposit-input');
    valueUpdate( 'deposit-total', amount );
    totalBalance( amount, true );
});

// withDraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = inputField('withdraw-input');
     valueUpdate('withdraw-total', amount);
     totalBalance( amount, false );
});