const display = document.getElementById('inputbox');
const buttons = document.querySelectorAll("button");

const buttons_arry = Array.from(buttons);
let string = '';

buttons_arry.forEach(bt => {

    bt.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;

        } else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;

        }
        else {
            string += e.target.innerHTML;
            display.value = string;

        }




    });
});





