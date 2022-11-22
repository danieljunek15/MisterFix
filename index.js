const option1 = document.querySelector('select[name=optie1]');
const checkbox = document.querySelector('input[name=optie1false]');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        option1.disabled = true;
    } else {
        option1.disabled = false;
    }
});

