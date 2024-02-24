var count=3;
let butt=document.getElementById("blocks");
function addNewButton() {
    var newButton = document.createElement("button");
    newButton.className = "new-button";
    newButton.innerHTML = "Block "+count;

    count = count+1;
    
    var buttonSection = document.querySelector(".button-section");
    butt.appendChild(newButton);
    newButton.setAttribute("onclick","dash()");
}

function pro(){
    window.location.href = "profile.html";
}
function dash(){
    window.location.href = "dash.html";
}
function out(){
    window.location.href = "login.html";
}