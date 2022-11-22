function checker() {
    document.addEventListener('click', function(){
        const lr1 = document.querySelector('#list-radio-1');
        var testli = document.getElementById("test-ul");
    if (lr1.checked) {
        testli.style.display = "block";
    } if (lr1.checked == false) {
        testli.style.display = "none";
    }
});
}
checker();