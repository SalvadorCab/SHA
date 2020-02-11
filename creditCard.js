const creditCardValue = document.querySelector(".creditCardText");
const validador = document.querySelector(".validador");
const Resultado = document.querySelector(".accessResult");
const imagen = document.querySelector(".centerSide img");

// Checks everytime someone clicks the button
validador.addEventListener("click", function() {
    let error = true;

    if(creditCardValue.value.length === 0)
        Resultado.innerText = "The field is empty!";
    else if(creditCardValue.value.length < 16)
        Resultado.innerText = "The credit card must contain 16 digit";
    else if(creditCardValue.value.charAt(15) % 2 !== 0)
        Resultado.innerText = "The last digit of the credit card must be even";
    else if(greaterThanSixteen(creditCardValue.value) === false)
        Resultado.innerText = "The sum of the digits must be over 16";
    else if(atLeastTwoValues(creditCardValue.value) === false)
        Resultado.innerText = "The credit card must contain at least two different digits";
    else if(isNaN(creditCardValue.value))
        Resultado.innerText = "The credit card must contain number digits only";
    else {
        Resultado.innerText = "Credit Card succesfully validated!";
        error = false;
    }

    if(error === true)
        imagen.src = "images/xxxxx.png";
    else
        imagen.src = "images/tick.png";
});

// Checks everytime someone type a value in the textfield
creditCardValue.addEventListener("input", function() {

    creditCardValue.value = creditCardValue.value.trim(); // Eliminate spaces
    if(creditCardValue.value.length > 16){
        creditCardValue.value = creditCardValue.value.slice(0, 16);  // don't allow the user to type more than 16 numbers
    }

    if(isNaN(creditCardValue.value))
        Resultado.innerText = "Warning! There is a character that is not a number!";
    else  
        Resultado.innerText = "";
});

function atLeastTwoValues(number){
    let firstValue;
    if(number.length > 1)  //There must be at least two numbers to compare
        firstValue = number.charAt(0);
    else
        return false;
    
    for(let i=1; i < number.length; i++){
        if(firstValue !== number.charAt(i))
            return true;
    }
    return false;
}

function greaterThanSixteen(number){
    let sum = 0;
    for(let i=0; i<number.length; i++)
        sum += parseInt(number.charAt(i));
    
    console.log(sum);
    
    if(sum < 16)
        return false;
    else
        return true;
}
/*
function main(){
    console.log(creditCardValue);
}

main();
*/