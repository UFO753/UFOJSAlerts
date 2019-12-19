/*

    Author: Wojciech "UFO753" Charkiewicz
    Downloaded from: https://github.com/UFO753/UFOJSAlerts
    Last Update: 19.12.2019 17:38 GMT+1

*/

function UFOAlertTrue(){
    console.log(true);
    UFOAlertClose();
    return true;
}

function UFOAlertFalse(){
    console.log(false);
    UFOAlertClose();
    return false;
}

function UFOAlertInputValue(){

}

var alert, AlertTextTop, AlertTextBottom;
function CreateElem(){
    alert= document.createElement("div");
    alert.setAttribute("class", "UFOAlert");
    alert.setAttribute("id","UFOAlert");
    AlertTextTop = document.createElement("div");
    AlertTextTop.setAttribute("class", "UFOAlertTop");
    AlertTextTop.setAttribute("id","UFOAlertTop");
    AlertTextMiddle = document.createElement("div");
    AlertTextMiddle.setAttribute("class", "UFOAlertMiddle");
    AlertTextMiddle.setAttribute("id","UFOAlertMiddle");
    AlertTextBottom = document.createElement("div");
    AlertTextBottom.setAttribute("class", "UFOAlertBottom");
    AlertTextBottom.setAttribute("id","UFOAlertBottom");
}



function UFOAlertClose(){
    document.getElementById("UFOAlert").style.top ="-200px";
    setTimeout(function(){document.getElementById("UFOAlert").remove();},500);
}

function createButton(text, func, class_of_button ){
    var button = document.createElement("input");
    button.type = "button";
    button.setAttribute("class",class_of_button);
    button.value = text;
    button.setAttribute("onclick", func);
    return button;
}

function UFOAlertCreate(){
    document.body.insertBefore(alert,document.body.firstChild);
    document.getElementById("UFOAlert").appendChild(AlertTextTop);
    document.getElementById("UFOAlert").appendChild(AlertTextMiddle);
    document.getElementById("UFOAlert").appendChild(AlertTextBottom);
}

function UFOAlert(alert_title,text,button_text){
    CreateElem();
    var button = createButton(button_text, 'UFOAlertClose()','UFOAlertButton');
    console.log(button);
    if(document.getElementById("UFOAlert")!=null)
        document.getElementById("UFOAlert").remove();
    alert.innerText='';
    AlertTextTop.innerText=alert_title;
    AlertTextMiddle.innerHTML= text;
    UFOAlertCreate();
    document.getElementById("UFOAlertBottom").appendChild(button);
    setTimeout(function(){ if(document.getElementById("UFOAlert")!=null){document.getElementById("UFOAlert").style.top ="10px"; }}, 300);
}

function UFOAlertConfirm(alert_title, text, button_false, button_true){
    CreateElem();
    var button_false = createButton( button_false, 'UFOAlertFalse()', 'UFOAlertFalseButton' );
    var button_true = createButton( button_true, 'UFOAlertTrue()', 'UFOAlertTrueButton' );
    if(document.getElementById("UFOAlert")!=null)
        document.getElementById("UFOAlert").remove();
    alert.innerText='';
    AlertTextTop.innerText=alert_title;
    AlertTextMiddle.innerHTML= text;
    UFOAlertCreate();
    document.getElementById("UFOAlertBottom").appendChild(button_false);
    document.getElementById("UFOAlertBottom").appendChild(button_true);
    setTimeout(function(){ if(document.getElementById("UFOAlert")!=null){document.getElementById("UFOAlert").style.top ="10px"; }}, 300);
}