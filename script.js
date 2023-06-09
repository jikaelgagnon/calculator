let data = 
{
    result: "",
    operand: "",
    operator: "",
}

function add(a,b){ return a + b;}

function subtract(a,b){ return a - b; }

function multiply(a,b){ return a*b; }

// TODO: div by zero check
function divide(a,b){ return a / b; }

function operate(operator, a, b)
{
    a = +a;
    b = +b;
    if (operator === "+") return add(a,b);
    else if (operator === "-") return subtract(a,b);
    else if (operator === "*") return multiply(a,b);
    else if (operator === "/") return divide(a,b);
}

function displayData()
{
    let display = [data.result, data.operand, data.operator];
    console.table(display);
}

function updateData(num)
{
    if (!data.result) data.result += num; // First time data being input
    else data.operand += num;
}

function performStoredOperation()
{
    if (data.operator) data.result = operate(data.operator, data.result, data.operand).toString();
    data.operand = "";
}

function updateDisplay()
{
    const display = document.querySelector(".display");
    display.textContent = (data.operand) ? data.operand : (data.result) ? data.result : "0";
}

function generateNumberButtons()
{
    const buttons = document.querySelector(".buttons");
    const row1 = document.querySelector(".row-1");
    const row2 = document.querySelector(".row-2");
    const row3 = document.querySelector(".row-3");
    const row4 = document.querySelector(".row-4");

    for (let num = 0; num < 10; num++) {
        const button = document.createElement("button");
        button.classList.add("number-button");
        button.textContent = num;
        button.addEventListener("click", () => 
        {
            updateData(num);
            displayData();
            updateDisplay()
        });

        if (num >= 7) row1.appendChild(button);
        else if (num >= 4) row2.appendChild(button);
        else if (num >= 1) row3.appendChild(button);
        else row4.appendChild(button);
    }
}


function generateOperatorButtons() 
{
    const rows = Array.from(document.querySelectorAll(".buttons div"));
    const operators = ["+", "-", "*", "/"];
    for (let index = 0; index < rows.length; index++) 
    {
        const button = document.createElement("button");
        button.classList.add("operator-button");
        button.textContent = operators[index];
        button.addEventListener("click", () => 
        {
            performStoredOperation();
            updateDisplay();
            data.operator = operators[index];
            displayData();
        })
        rows[index].appendChild(button);  
    }
}

function generateEqualsButton()
{
    const row4 = document.querySelector(".row-4");
    const equalsButton = document.createElement("button");
    equalsButton.textContent = "=";
    equalsButton.classList.add("equals-button");
    equalsButton.addEventListener("click", () => 
    {
        performStoredOperation();
        data.operator = '';
        displayData();
        updateDisplay();
    })
    row4.appendChild(equalsButton);
}

function generateClearButton()
{
    const row4 = document.querySelector(".row-4");
    const clearButton = document.createElement("button");
    clearButton.classList.add("clear-button");
    clearButton.textContent = "C";
    clearButton.addEventListener("click", () => 
    {
        data.result = "";
        data.operand = "";
        data.operator = "";
        const display = document.querySelector(".display");
        updateDisplay();
    })
    row4.appendChild(clearButton);
}

function addHoverEffects()
{

    const numberButtons = Array.from(document.querySelectorAll(".number-button"));
    numberButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {button.style.backgroundColor = "ivory";});
    });

    const operatorButtons = Array.from(document.querySelectorAll(".operator-button"));
    operatorButtons.forEach((button) => {
        button.addEventListener("mouseover", () => {button.style.backgroundColor = "gold";});
    });

    const equalsButton = document.querySelector(".equals-button");
    equalsButton.addEventListener("mouseover", () => {equalsButton.style.backgroundColor = "SpringGreen";});

    const clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("mouseover", () => {clearButton.style.backgroundColor = "tomato";});

    const buttons = numberButtons.concat(operatorButtons, [equalsButton, clearButton]);
    buttons.forEach((button) => 
    {
        button.addEventListener("mouseout", () => {button.style.backgroundColor = "lightgrey"})
    })

}

function main()
{
    generateNumberButtons();
    generateClearButton();
    generateEqualsButton();
    generateOperatorButtons();
    addHoverEffects();
}

main();