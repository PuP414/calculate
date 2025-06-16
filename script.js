const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button =>{
    button.addEverntListener('click', () => {
        const value = button.textcontent;

        if( value=== 'AC'){
            display.value = '';
        }
        else if ( value === '='){
            display.value = eval(display.value);
        }
        else{
            display.value += value;
        }


    });
});