function displayDate()
{
    alert("Hello! I am an alert box!!");
}

window.onload = function() {
    var btn = document.getElementById("myButton");
    const data = require('../config/map-settings.json');
    console.log(data);
    btn.onclick = displayDate;
}