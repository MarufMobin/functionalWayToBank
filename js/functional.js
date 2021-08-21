// input Field Grap Purpuss
function inputField(fieldId){
    // const fieldInputId =  document.getElementById(fieldId);
    // const fieldInputValue = parseFloat(fieldInputId.value);
    const fieldInputValue = getInnerText(fieldId);
    // fieldInputId.value = '';
    document.getElementById(fieldId).value = '';
    return fieldInputValue;
};

// id Catch and amount update
function valueUpdate( valueId , amount ){
    // const valueInputId = document.getElementById(valueId);
    // const valueInputNumber = parseFloat(valueInputId.innerText);
    const valueInputNumber = getInnerText(valueId);
    const updateValueAmount = valueInputNumber + amount;
    // valueInputId.innerText = updateValueAmount;
    document.getElementById(valueId).innerText = updateValueAmount;
};

// get inner text Value
function getInnerText(fieldId){
    const totalTag = document.getElementById(fieldId);
    const totalTagNum = parseFloat(totalTag.innerText);
    return totalTagNum;
}

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
    if( amount > 0 ){
        valueUpdate( 'deposit-total', amount );
        totalBalance( amount, true );
    }
});

// withDraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = inputField('withdraw-input');
    const totalTag = getInnerText('balance-total');
     if( amount > 0 && amount <= totalTag ){
        valueUpdate('withdraw-total', amount);
        totalBalance( amount, false );
     }
});