
function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function runword(input) {

        var word = input;
        var show = word.charAt(0);
        for (let i = 1; i <word.length;i++) {
            show += word.charAt(i);
            document.getElementById("display").innerHTML = show;
           await timeout(100);
        }

}

function no_click(){
    document.getElementById("display").innerHTML = "You picked the wrong choice!<br>But don't worry, I fixed it!<br>Thank you for being my world!";
}
function yes_function(){
    runword("Thank you for being my world!");
}
function no_function(){
    document.getElementById("no_button").innerHTML = "Non't";
    no_click();
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
}
