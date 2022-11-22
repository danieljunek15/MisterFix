const lr1 = document.querySelector('#list-radio-1');
var testli = document.getElementById("test-li");

function checker() {
    document.addEventListener('click', function(){
    if (lr1.checked) {
        console.log("ja");
        testli.style.display = "block";
    } if (lr1.checked == false) {
        console.log("nee");
        testli.style.display = "none";
    }
});

checker();
}