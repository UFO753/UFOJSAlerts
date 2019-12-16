function UFOAlertClose(){
    document.getElementById("UFOAlert").style.top ="-200px";
    setTimeout(function(){document.getElementById("UFOAlert").remove();},500);
}

function createButton(text, func ){
    var button = document.createElement("input");
    button.type = "button";
    button.value = text;
    button.setAttribute("onclick", func);
    return button;
}

function UFOAlert(alert_title,text,button_text){
    var alert= document.createElement("div");
    alert.setAttribute("class", "UFOAlert");
    alert.setAttribute("id","UFOAlert");
    var AlertTextTop = document.createElement("div");
    AlertTextTop.setAttribute("class", "UFOAlertTop");
    AlertTextTop.setAttribute("id","UFOAlertTop");
    AlertTextTop.innerText=alert_title;
    var AlertTextMiddle = document.createElement("div");
    AlertTextMiddle.setAttribute("class", "UFOAlertMiddle");
    AlertTextMiddle.setAttribute("id","UFOAlertMiddle");
    AlertTextMiddle.innerHTML= text;
    var AlertTextBottom = document.createElement("div");
    AlertTextBottom.setAttribute("class", "UFOAlertBottom");
    AlertTextBottom.setAttribute("id","UFOAlertBottom");
    button = createButton(button_text, 'UFOAlertClose()');
    console.log(button);
    if(document.getElementById("UFOAlert")!=null)
        document.getElementById("UFOAlert").remove();
    alert.innerText='';
    document.body.insertBefore(alert,document.body.firstChild);
    document.getElementById("UFOAlert").appendChild(AlertTextTop);
    document.getElementById("UFOAlert").appendChild(AlertTextMiddle);
    document.getElementById("UFOAlert").appendChild(AlertTextBottom);
    document.getElementById("UFOAlertBottom").appendChild(button);
    setTimeout(function(){ if(document.getElementById("UFOAlert")!=null){document.getElementById("UFOAlert").style.top ="10px"; }}, 300);
}