
document.write('<link rel="stylesheet" type="text/css" href="http://localhost:9004/style.css">');

var myElement = document.getElementById('myFirstWidget');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'http://localhost:9004/data.js');
document.getElementById('myFirstWidget').appendChild(JavaScriptCode);
