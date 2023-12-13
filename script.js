
let input = document.getElementById('calsi')
/*
function display(ip){
   /* input = document.getElementById("calsi")
    input.value += ip;

}*/

function display(ip) {
    input.value += ip;
}

function Calculate(){
    try{
        input.value = eval(input.value)
    }
    catch(err){}

}

function Clear(){
    input.value = ""
}

function del(){
    input.value = input.value.slice(0,-1)
}