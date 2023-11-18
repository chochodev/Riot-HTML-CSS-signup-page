const cl = console.log.bind(console);

cl('working?');

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