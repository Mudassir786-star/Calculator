function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}


function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value) 
}

function getsqrt(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value)
}
  

function getcas(){
    var result = document.getElementById("result");
    result.value = Math.cos(result.value)
}

function getsin(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);
}

function gettan(){
    var result = document.getElementById("result");
    result.value = Math.tan(result.value)
}

function getpov(){
    var result = document.getElementById("result");
    result.value = Math.pow(result.value)
}


function getcube(){
    var result = document.getElementById("result");
    result.value = Math.cube(result.value)
}

function gethyp(){
    var result = document.getElementById("result");
    result.value = Math.hypot(result.value) 
}