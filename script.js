let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);

let string = '';
buttonArray.forEach(btn => {

    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
        } else if (e.target.innerHTML == 'AC') {
            string = '';
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
        } else {
            string += e.target.innerHTML;
        }
        display.value = string;
    });
});
