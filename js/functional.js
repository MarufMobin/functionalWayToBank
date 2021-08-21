// input Field Grap Purpuss
function inputField(fieldId){
    const fieldInputId =  document.getElementById(fieldId);
    const fieldInputValue = parseFloat(fieldInputId.value);
    fieldInputId.value = '';
    return fieldInputValue;
};

// id Catch and amount update
function valueUpdate( valueId , amount ){
    // const valueInputId = document.getElementById(valueId);
    // const valueInputNumber = parseFloat(valueInputId.innerText);
    const valueInputNumber = getInnerTextValue(valueId)
    const updateValueAmount = valueInputNumber + amount;
    document.getElementById(valueId).innerText = updateValueAmount;
};

// get inner text Value
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
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
    const value = getInnerTextValue('balance-total');
    
     if( amount > 0 && amount <= value){
        valueUpdate('withdraw-total', amount);
        totalBalance( amount, false );
     }
});