var chin = ""
var input = document.getElementById("TextValue");
function start() {
    document.getElementById('TextValue').value = 0;
}
function display(a) {
    if (document.getElementById('TextValue').value == 0) {
        document.getElementById('TextValue').value = a;
    }
    else {
        chin = document.getElementById('TextValue').value += a;
    }
}
function remove() {
    chin=document.getElementById('TextValue').value
    if (chin.length == 1) {
        start();
    }
    else {
        chin = chin.slice(0, -1);
        document.getElementById('TextValue').value = chin;
    }
}
function textdec() {
    document.getElementById('TextValue').value = null;
}
function operation() {
    var str = document.getElementById('TextValue').value;
    var ch = eval(str);
    document.getElementById('TextValue').value = ch;
}