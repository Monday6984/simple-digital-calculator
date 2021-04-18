function getHistory() {
    return document.getElementById("history-value").innerText;
}

function displayHistory(num) {
    document.getElementById("history-value").innerText=num;
}


function getResult() {
    return document.getElementById("result-value").innerText;
}

function displayResult(num) {
    if(num==""){
        document.getElementById("result-value").innerText=num;
    }
    else{
        document.getElementById("result-value").innerText=getFormattedNumber(num);
    }
   
}


function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            displayHistory("");
            displayResult("0");
        }
        else if(this.id == "backspace"){
            var output = reverseNumberFormat(getResult()).toString();
            var history = getHistory();
            if(output || history){ // if output has a value
                output = output.substr(0,output.length-1);
                history = history.substr(0,history.length-1);
                displayResult(output);
                displayHistory(history);
            }
        }
        else {
            var output = getResult();
            var history = getHistory();
            if(output==""&& history !=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history !=""){
                output = output==""?
                output:reverseNumberFormat(output);
                history = history+output;
                if(this.id=="="){
                    var result = eval(history);
                    displayResult(result);
                    displayHistory("");
                }
                else {
                    history = history+this.id;
                    displayHistory(history);
                    displayResult("")
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i = 0; i<number.length; i++){
    number[i].addEventListener('click',function(){
       var output = reverseNumberFormat(getResult());
       if(output!=NaN){ // if output is a number
           output = output+this.id;
           displayResult(output);
       }
    });
}