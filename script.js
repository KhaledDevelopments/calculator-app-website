//Access DOM elements of calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

// Define result and expression
let expression = '';
let result = '';

// Create event handler function

function calcButtonClick(event){
    // Retrieve the value from the clicked button
    const inputtedValue = event.target;
    const action = inputtedValue.dataset.action; //Get action from HTML (data-action)
    const value = inputtedValue.dataset.value; //Get value from HTML (data-value)

    switch(action){
        case 'number' :
            storeNumber(value);
            break;
        case 'clear' :
            clearAll();   
            break;
        case 'backspace' :
            backspace();
            break;
        case 'division' :
            case 'multiplication' :
                case 'subtraction' :
                    case 'addition' :
                        if(expression === '' && result !== ''){
                            startFromResult(value);
                        }
                        else if(expression !== '' && !isLastCharOperator()){
                            storeNumber(value);
                        }
        case 'submit':
            submit();
            break;
    }
    //Display it to make sure this works
    console.log(inputtedValue, action, value);

    updateDisplay(expression, result);
}

//Listen for button clicks, then send them to the event handler function
inputBox.addEventListener('click', calcButtonClick);

function storeNumber(value){
    expression += value;
}

function clearAll(){
    expression = '';
    result = '';
}

function backspace(){
    expression = expression.slice(0, -1); //-1 would always be the end of the string.
}

function startFromResult(value){
    expression += result + value;
}

function isLastCharOperator(){
    return isNaN(parseInt(expression.slice(-1)));
}

function updateDisplay(expression, result){
    expressionDiv.textContent = expression;
    resultDiv.textContent = result;
}