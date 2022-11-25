// get needed html elements

const option1 = document.querySelector('select[name=optie1]');
const choiceDiv = document.getElementById('choices');
const choiceButtons = choiceDiv.querySelectorAll('input[type=button]');

// add event listeners to (standard) button: "anders"

const andersLabel = document.createElement("label");
andersLabel.innerHTML = "anders";
const andersInput = document.createElement("input");
andersInput.type = "text";
andersInput.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
andersLabel.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');

// add categories in json to dynamically loop through

const subCats = [
    {
        name: "Bomen of struiken planten",
        subcategories: ["Bomen planten", "Struiken planten", "Heg planten", "Anders"],
        information: {
            typeOfPlants: ["struiken", "heggen", "eik", "beuk", "berk", "dennenboom", "spar", "kastanje", "coniferen", "populier", "in overleg"],
            questions: ["Hoeveel bomen, struiken of heggen moeten er in totaal gelpant worden? (optioneel)", "Hoe hoog zijn de bomen, struiken of heggen?"],
            options: ["int", "0-2, 2-4, 4-6, hoger dan 6 meter, dat weet ik niet"],
            location: ["voortuin", "achtertuin", "zijtuin", "balkon", "dakterras", "in overleg", "anders"],
            accecebility: ["makkelijk bereikbaar", "via de woning", "via tuinhek of poort", "anders, namelijk"],
            when: ["met spoed", "in overleg", "binnen 2 weken", "binnen een maand", "binnen een paar maanden", "anders, namelijk"],   
        }
    },
    {
        name: "Tuinaanleg",
        subcategories: [],
    },
    {
        name: "Tuinontwerp",
        subcategories: [],
    },
    {
        name: "Tuinonderhoud",
        subcategories: [],
    },
    {
        name: "Gras",
        subcategories: [],
    },
    {
        name: "struiken en heggen snoeien of verwijderen",
        subcategories: [],
    },
    {
        name: "Gras leggen of zaaien",
        subcategories: [],
    },
    {
        name: "Tuin of buitenverlichting installeren",
        subcategories: [],
    },
    {
        name: "Vijver aanleggen",
        subcategories: [],
    },
    {
        name: "Tuin irrigatie",
        subcategories: [],
    },
];

// add first questions by looping through the json names
// add back to option 1 button
// when option chosen redirect to next question/function

choiceButtons.forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('footer').classList.add('absolute', 'bottom-0', 'w-full');
        const back = document.createElement('button');
        back.innerHTML = 'Terug naar optie 1';
        back.classList.add('bg-black', 'hover:bg-gray-700', 'text-white', 'font-bold', 'py-2', 'rounded', 'ml-10', 'mr-10','cursor-pointer');
        back.addEventListener('click', function() {
            choiceButtons.forEach(element => {
                setInterval(() => {
                    element.style.visibility = 'visible';
                }, 3000);
            });
        });
        choiceDiv.appendChild(back);
        choiceButtons.forEach(element => {
            element.style.display = 'none';
            element.classList.remove('bg-black', 'py-2', 'px-4',);
            element.classList.add('bg-black');
            if (element === this) {
                const choice1 = document.createElement('h1');
                choice1.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
                choice1.innerHTML = '1. ' + element.value;
                choiceDiv.appendChild(choice1);
                const subcategories = document.createElement('div');
                subcategories.id = 'subcategories';
                subcategories.classList.add('flex', 'flex-col-reverse','flex-wrap', 'justify-center');
                choiceDiv.appendChild(subcategories);
                displaySubCategories(element.value);
            }
        });
    }, {once : true});
});

// display subcategories by looping through the chosen categories, subcategories
// when subcategory chosen redirect to next question/function

function displaySubCategories(sub) {
    const subCatDiv = document.getElementById('subcategories');
    subCatDiv.innerHTML = '';
    const subCatTitle = document.createElement('h1');
    subCatTitle.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
    subCatTitle.innerHTML = 'Kies een Categorie';
    subCatDiv.appendChild(subCatTitle);
    subCats.forEach(element => {
        if (element.name === sub) {
            element.subcategories.forEach(subCat => {
                const subCatButton = document.createElement('button');
                subCatButton.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
                subCatButton.innerHTML = subCat;
                subCatButton.addEventListener('click', function() {
                    typeOfPlantsQuestion(subCat);
                });
                subCatDiv.appendChild(subCatButton);
            });
        }
    });
}

// display type of plants by looping through certain categorie type of plants
// add next button, that redirects to next question/function
// take all the answers and place them in array

function typeOfPlantsQuestion(subCat) {
    const subCatDiv = document.getElementById('subcategories');
    subCatDiv.innerHTML = '';
    const type = document.createElement('h1');
    type.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
    type.innerHTML = "2. " + subCat;
    const plantOptionsDiv = document.createElement('div');
    plantOptionsDiv.classList.add('flex', 'flex-wrap', 'justify-center');
    subCats.forEach(element => {
        if (element.subcategories.includes(subCat)) {
            element.information.typeOfPlants.forEach(plant => {
                let labelPlant = document.createElement("label");
                labelPlant.innerHTML = plant;
                let inputPlant = document.createElement("input");
                inputPlant.type = "checkbox";
                inputPlant.name = "plant";
                inputPlant.value = plant;
                inputPlant.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
                labelPlant.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
                labelPlant.appendChild(inputPlant);
                plantOptionsDiv.appendChild(labelPlant);
            });
            andersInput.value.name = "plant";
            andersLabel.appendChild(andersInput);
            plantOptionsDiv.appendChild(andersLabel);
        }
    });
    let submitPlant = document.createElement('a');
    submitPlant.innerHTML = 'Volgende';
    submitPlant.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
    submitPlant.addEventListener('click', function() {
        let checkedPlants = document.querySelectorAll('input[name="plant"]:checked');
        let checkedPlantsArray = [];
        if (checkedPlants.length > 0) {
            checkedPlants.forEach(element => {
                checkedPlantsArray.push(element.value);
            });
        }
        if (andersInput.value !== '') {
            checkedPlantsArray.push(andersInput.value);
        }
        quantityQuestions(subCat);
    });
    plantOptionsDiv.appendChild(submitPlant);
    subCatDiv.appendChild(plantOptionsDiv);
    subCatDiv.appendChild(type);
}

if (window.location.href === 'ComfirmatiePage.html') {
    const confirmDiv = document.getElementById('confirm');
    const confirmTitle = document.createElement('h1');
    confirmTitle.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
    confirmTitle.innerHTML = 'Bevestiging';
    confirmDiv.appendChild(confirmTitle);
    const confirmText = document.createElement('p');
    confirmText.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
    confirmText.innerHTML = 'Hieronder ziet u de door u gekozen opties. Klik op de knop om uw bestelling te bevestigen.';
    confirmDiv.appendChild(confirmText);
}


function quantityQuestions(subCat) {
    const subCatDiv = document.getElementById('subcategories');
    subCatDiv.innerHTML = '';
    subCats.forEach(element => {
    if (element.subcategories.includes(subCat)) {
        element.information.questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('flex', 'flex-col', 'items-center', 'justify-center');
            const questionText = document.createElement('h1');
            questionText.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
            questionText.innerHTML = question;
            questionDiv.appendChild(questionText);
            const questionInput = document.createElement('input');
            questionInput.classList.add('border', 'border-black', 'rounded', 'm-1', 'p-1');
            questionInput.type = 'number';
            questionInput.name = 'quantity';
            questionInput.step = '1';
            questionDiv.appendChild(questionInput);
            subCatDiv.appendChild(questionDiv);
        });
    }
    });
    let submitForm = document.createElement('a');
    submitForm.innerHTML = 'Confirm form';
    submitForm.classList.add('bg-black', 'py-2', 'px-4', 'font-bold','hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
    submitForm.addEventListener('click', function() {
            window.location.href = 'ComfirmatiePage.html';
    });
    subCatDiv.appendChild(submitForm);
}