const cl = console.log.bind(console);

cl('working?');

// FOR THE INPUT UI STYLES
const inputs = document.querySelectorAll('.input');

inputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value.length > 0) {
            input.parentNode.querySelector('.label').style.display = 'none';
        } else {
            input.parentNode.querySelector('.label').style.display = 'block';
        }
    })
});

// FOR THE REMEMBER ME (STAY SIGNED IN)
const rememberCheckbox = document.getElementById('remember-checkbox');
const checkboxBg = document.querySelector('.checkbox_bg');
const checkboxTick = document.querySelector('.tick');

rememberCheckbox.addEventListener('change', () => {
    if (rememberCheckbox.checked) {
        checkboxBg.classList.add('show');
        checkboxTick.classList.add('show');
    } else {
        checkboxBg.classList.remove('show');
        checkboxTick.classList.remove('show');
    }
});


// FOR THE SELECT LANGUAGE
const languageSelect = document.getElementById('select-language');

languageSelect.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex];
  selectedOption.textContent = selectedOption.value.toUpperCase();
});