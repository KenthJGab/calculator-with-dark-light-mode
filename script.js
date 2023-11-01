const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

for (let i = 0; i < operators.length; i++)
{
    operators[i].addEventListener('click', function()
    {
        if (this.id == 'clear')
        {
            printOutput('');
            printHistory('');
        }
        else if (this.id == 'backspace')
        {
            let output = getOutput();
            output = output.toString();
            if (output)
            {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else if (this.id == '=')
        {
            let output = getOutput();
            if (output)
            {
                try
                {
                    output = eval(output);
                    printOutput(output);
                    printHistory('');
                }
                catch (error)
                {
                    printOutput('Error');
                    printHistory('');
                }
            }
        }
        else
        {
            let output = getOutput();
            output += this.id;
            printOutput(output);
        }
    });
}

for (let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener('click', function()
    {
        let output = getOutput();
        output += this.id;
        printOutput(output);
    });
}

function getHistory()
{
    return document.querySelector('.history-value').innerText;
}

function printHistory(num)
{
    document.querySelector('.history-value').innerText = num;
}

function getOutput()
{
    return document.querySelector('.output-value').innerText;
}

function printOutput(num)
{
    if (num == '')
    {
        document.querySelector('.output-value').innerText = num;
    }
    else
    {
        document.querySelector('.output-value').innerText = num;
    }
}

function toggleTheme()
{
    const body = document.body;
    const calculatorBase = document.getElementById('calculator-base');
    const themeToggle = document.getElementById('theme-toggle');
    if (body.classList.contains('light-mode'))
    {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        calculatorBase.classList.remove('light-mode');
        calculatorBase.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else
    {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        calculatorBase.classList.remove('dark-mode');
        calculatorBase.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}
