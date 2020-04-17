function WidgetCallback(JSONobject) {
    var wHelloWorld = JSONobject;
    console.log(JSONobject);
    var wHTML = "";

    wHTML += ('<center><div id="MyWidget" style="background:black;width:' + wWidth + ';Height:' + wHeight + ';" >');
    wHTML += ('<br><div style="font-size:x-large;text-decoration:none;color:' + wFColor + '">');
    wHTML += ( wHelloWorld["script test"].labels + ' <br> ' + wHelloWorld["script test"].phone_number + '</div><br>');
    wHTML += ('</div></center>');

    document.getElementById('myFirstWidget').innerHTML = wHTML;
}


// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}


// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://localhost:9004/get/number';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    console.log('//////////////////', text);
    WidgetCallback(JSON.parse(text));
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

makeCorsRequest();
