document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('ac')) {
                inputBox.value = '';  
            } else if (button.classList.contains('del')) {
                inputBox.value = inputBox.value.slice(0, -1);  
            } else if (button.classList.contains('equalBtn')) {
                try {
                    inputBox.value = eval(inputBox.value.replace('%', '/100'));
                } catch (e) {
                    inputBox.value = 'ERROR ';
                }
            } else if (button.classList.contains('operator')) {
                handleOperator(value);
            } else {
                inputBox.value += value;  
            }
        });
    });

    function handleOperator(operator) {
        const lastChar = inputBox.value.slice(-1);
        if (inputBox.value !== '' && !['+', '-', '*', '/', '.'].includes(lastChar)) {
            inputBox.value += operator;  
        } else if (operator === '%' && inputBox.value !== '' && !isNaN(lastChar)) {
            inputBox.value = (parseFloat(inputBox.value) / 100).toString(); 
        }
    }
});
