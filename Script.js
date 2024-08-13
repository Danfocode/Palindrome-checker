const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function clearExpression(str) {
    const regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, '');
}

function validPalindrome() {
    const inputText = textInput.value.toLowerCase();
    
    if (inputText === "") {
        alert("Please input a value");
        return;
    }
    
    const cleanedText = clearExpression(inputText); 
    const arrayText = cleanedText.split("");
    const reversedText = arrayText.slice().reverse().join(""); 
    if (cleanedText === reversedText) {
        resultText.innerText = `${textInput.value} is a palindrome`;
    } else {
        resultText.innerText = `${textInput.value} is not a palindrome`;   
    }

}

checkButton.addEventListener("click", validPalindrome);
textInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        checkButton.click();
    }
})