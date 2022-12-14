const option1 = document.querySelector('select[name=optie1]');
const choiceDiv = document.getElementById('choices');
const choiceButtons = choiceDiv.querySelectorAll('input[type=button]');

const subCats = [
    {
        name: "Zonnepaneel systeem installeren of onderhouden",
        subcategories: ["Aanschaf van de zonnepanelen", "Installeren", "Vervangen", "Onderhoud", "Repareren", "Anders"],
        information: {
            typeOfRoof: ["Schuin dak", "Plat dak", "Grond", "In overleg"],
            questions: ["Hoeveel zonnepanelen moeten er geplaatst worden?"],
            options: ["int", "0-2, 2-4, 4-6, meer dan 6, dat weet ik niet"],
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
                choice1.innerHTML = 'U heeft gekozen voor ' + element.value;
                choiceDiv.appendChild(choice1);
                const subcategories = document.createElement('div');
                subcategories.id = 'subcategories';
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
    subCatTitle.innerHTML = 'Kies een subcategorie';
    subCatDiv.appendChild(subCatTitle);
    subCats.forEach(element => {
        if (element.name === sub) {
            element.subcategories.forEach(subCat => {
                const subCatButton = document.createElement('button');
                subCatButton.classList.add('bg-black', 'py-2', 'px-4', 'hover:bg-blue-700', 'rounded', 'm-1', 'cursor-pointer', 'text-white');
                subCatButton.innerHTML = subCat;
                subCatButton.addEventListener('click', function() {
                    displayQuestions(subCat);
                });
                subCatDiv.appendChild(subCatButton);
            });
        }
    });
}