"use strict";

var frames = [];
var ind = 0, currentAscii = "", speed = null;

window.onload = function loadJS(){
		var btnStart = document.getElementById('btnStart');
		btnStart.onclick = start;
        
        var btnStop = document.getElementById('btnStop');
        btnStop.onclick = stop;
        btnStop.disabled=true;
        
        var selAnimation=document.getElementById('selAnimation');
        selAnimation.onchange=selectAnimation;
        
        var selSize=document.getElementById('selSize');
        selSize.onchange=changeSize;
        
        var chkType=document.getElementById('chkType');
        chkType.onchange=changespeed;
};

function doAnimation(){
    var myTextArea = document.getElementById('myTextArea');
    myTextArea.value = frames[ind];
    ind++;
    if(ind>frames.length-1) {
        ind=0;
    }
}

function start() {
    document.getElementById('btnStop').disabled=false;
    document.getElementById('selAnimation').disabled=true;
    document.getElementById('btnStart').disabled=true;
    
    ind=0;
    var myTextArea = document.getElementById('myTextArea');
    currentAscii = myTextArea.value;
    frames = myTextArea.value.split("=====\n");
    var chkType = document.getElementById('chkType');

    if(chkType.checked) {
        speed = setInterval(doAnimation,100);
    } else {
        speed = setInterval(doAnimation,200);
        
    }
    

}

function stop(){
    document.getElementById('btnStop').disabled=true;
    document.getElementById('selAnimation').disabled=false;
    document.getElementById('btnStart').disabled=false;
    clearInterval(speed);
    speed = null;
    var myTextArea = document.getElementById('myTextArea');
    myTextArea.value = currentAscii;
}

function changespeed(){
    if(speed !== null) {
        clearInterval(speed);
        speed = null;
		var chkType = document.getElementById('chkType');
		if (chkType.checked) {
			speed = setInterval(doAnimation,100);
		} else {
			speed = setInterval(doAnimation,200);
			
		}
    }
}

function changeSize(){
    var selSize=document.getElementById('selSize');
    var myTextArea=document.getElementById('myTextArea');
    myTextArea.style.fontSize=selSize.value;
    
}

function selectAnimation(){
    var selAnimation=document.getElementById('selAnimation');
    var myTextArea=document.getElementById('myTextArea');
    myTextArea.value=ANIMATIONS[selAnimation.value];
}