const option1 = document.querySelector('select[name=optie1]');
const checkbox = document.querySelector('input[name=optie1false]');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        option1.disabled = true;
    } else {
        option1.disabled = false;
    }
});

// choice buttons

const choiceDiv = document.getElementById('choices');
const choiceButtons = choiceDiv.querySelectorAll('input[type=button]');

choiceButtons.forEach(element => {
    element.addEventListener('click', function() {
        element.style.backgroundColor = 'green';
        const back = document.createElement('button');
        back.innerHTML = 'Terug naar optie 1';
        back.addEventListener('click', function() {
            choiceButtons.forEach(element => {
                element.style.visibility = 'visible';
            });
        });
        choiceDiv.appendChild(back);
        choiceButtons.forEach(element => {
            if (element != this) {
                element.style.visibility = 'hidden';
            }
        });
    });
});
