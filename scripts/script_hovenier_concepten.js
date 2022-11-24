const option1 = document.querySelector('select[name=optie1]');
const choiceDiv = document.getElementById('choices');
const choiceButtons = choiceDiv.querySelectorAll('input[type=button]');

const andersLabel = document.createElement("label");
andersLabel.innerHTML = "anders";
const andersInput = document.createElement("input");
andersInput.type = "text";
andersInput.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
andersLabel.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');

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
    let submitPlant = document.createElement('input');
    submitPlant.type = 'submit';
    submitPlant.value = 'Volgende';
    submitPlant.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
    plantOptionsDiv.appendChild(submitPlant);
    subCatDiv.appendChild(plantOptionsDiv);
    subCatDiv.appendChild(type);
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
                questionInput.type = 'text';
                questionInput.name = 'question';
                questionDiv.appendChild(questionInput);
                subCatDiv.appendChild(questionDiv);
            });
        }
        // if (element === subCat) {
        //     console.log(element.information)
        //     element.information.forEach(subCat, i => {
        //         const subCatTitle = document.createElement('h1');
        //         subCatTitle.classList.add('text-lg', 'font-bold', 'm-1', 'text-center', 'text-white');
        //         subCatTitle.innerHTML = subCat.questions[i];
        //         subCatDiv.appendChild(subCatTitle);
        //         if (subCat.options[i] === 'int') {
        //             const input = document.createElement('input');
        //             input.type = 'number';
        //             input.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
        //             subCatDiv.appendChild(input);
        //         } else {
        //             const options = subCat.options[i].split(',');  
        //             options.forEach(option => {
        //                 const optionButton = document.createElement('button');
        //                 optionButton.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
        //                 optionButton.innerHTML = option;
        //                 subCatDiv.appendChild(optionButton);
        //             });
        //         }
        //         subCatButton.addEventListener('click', function() {
        //             displayQuestions(subCat);
        //         });
        //         subCatDiv.appendChild(subCatButton);
        //     });
        // }
    });
}