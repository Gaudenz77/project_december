
var image = document.getElementById('mainbox1');
function changeColors1() {
    document.getElementById("mainbox1").style.color = "#ff0000";
}

var image = document.getElementById('mainbox2');
function changeColors2() {
    document.getElementById("mainbox2").style.color = "	#00FF00";
}




function changeText() {
    var element = document.getElementById("message");
    element = element.innerHTML = "New Heading";

}

function setMessage1(value) {
    document.getElementById("message").innerText = value;
} 

function setMessage2(value) {
    document.getElementById("message").innerText = value;
} 

function changeText1 () {
let inputElement = document.getElementById("message");
let value = inputElement.value;

if (!value) {
    setMessage1('allesbestens');
}
}

function changeText2 () {
    let inputElement = document.getElementById("message");
    let value = inputElement.value;
    
    if (!value) {
        setMessage2('So nicht!');
    }
    }