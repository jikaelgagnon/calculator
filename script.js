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
    if (data.operator) data.result = operate(data.operator, data.result, data.operand);
    data.operand = "";
}

function updateDisplay()
{
    displayData();
    const display = document.querySelector(".display");
    display.textContent = (data.operand) ? data.operand : data.result;
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
        button.textContent = num;
        button.addEventListener("click", () => 
        {
            updateData(num);
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
        button.textContent = operators[index];
        button.addEventListener("click", () => 
        {
            performStoredOperation();
            updateDisplay();
            data.operator = operators[index];
        })
        rows[index].appendChild(button);  
    }
}

function generateEqualsButton()
{
    const row4 = document.querySelector(".row-4");
    const equalsButton = document.createElement("button");
    equalsButton.textContent = "=";
    equalsButton.addEventListener("click", () => 
    {
        performStoredOperation();
        updateDisplay();
    })
    row4.appendChild(equalsButton);
}

function generateClearButton()
{
    const row4 = document.querySelector(".row-4");
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.addEventListener("click", () => 
    {
        data.result = "";
        data.operand = "";
        data.operator = "";
        updateDisplay();
    })
    row4.appendChild(clearButton);
}

function main()
{
    generateNumberButtons();
    generateOperatorButtons();
    generateEqualsButton();
    generateClearButton();
}

main();