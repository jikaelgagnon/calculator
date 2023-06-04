let data = 
{
    operands: ["",""],
    operator: "",
    currentOperand: 0,
}

function add(a,b){ return a + b;}

function subtract(a,b){ return a - b; }

function multiply(a,b){ return a*b; }

// TODO: div by zero check
function divide(a,b){ return a / b; }

function operate(operator, a, b)
{
    if (operator === "+") return add(a,b);
    else if (operator === "-") return subtract(a,b);
    else if (operator === "*") return multiply(a,b);
    else if (operator === "/") return divide(a,b);
}

function displayData()
{
    console.log(`Operand 0 ${data.operands[0]}`);
    console.log(`Operand 1 ${data.operands[1]}`);
    console.log(`Operator ${data.operator}`)
}

function switchOperand()
{
    data.currentOperand = +!data.currentOperand;
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
            data.operands[data.currentOperand] += num;
            console.log(data.operands[data.currentOperand]);
            displayData();
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
            data.operator = operators[index];
            switchOperand();
            displayData();
        })
        rows[index].appendChild(button);  
    }
}
generateNumberButtons();
generateOperatorButtons();